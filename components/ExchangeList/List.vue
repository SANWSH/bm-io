<template>
    <div class="wrapper">
        <exchange-list-wrapper class="hero">
            <article class="h-full">
                <h1 class="title-1">Обменивай безопасно, быстро и выгодно!</h1>
                <p class="text-1 text-white text-opacity-50">А так же совершенно анонимно</p>
                <div class="frame mt-auto h-max flex relative self-center p-1 items-center border-white border-opacity-20 border rounded-2xl">
                    <b-button 
                    class="typography-x"
                    type="Primary" 
                    size="M" 
                    text="Оставить отзыв"/>    
                </div>
            </article>
        </exchange-list-wrapper>
        <exchange-list-item :class="'change' + exchanger.id" class="shadow-md shadow-black"
        v-for="exchanger in EXCHANGERS" 
        :key="exchanger.id" 
        :id="exchanger.id"
        :title="exchanger.title? exchanger.title : ''"
        :items="exchanger.titleItems"
        @value:ChangePosition="store.swapSelectedItems()"/>
        <exchange-list-wrapper class="total">
            <h1 class="title-2">
                <span class="text-gray-500">Меняем</span> 
                {{ store.selectedGiveItem.name }} 
                <span class="text-gray-500">на</span>
                {{ store.selectedGetItem.name }}
            </h1>
            <div class="exchange-wrapper" v-if="store.currency && store.currencyOperations">
                <div class="mb-4">
                    <span class="text-gray-500" v-show="course">Обмен по курсу: {{ course }}</span>
                    <div class="h-[1px] w-full bg-white bg-opacity-20 mt-2.5"></div>
                </div>
                <div class="exchange-blocks">
                    <exchange-list-block
                    title="Отдаете"
                    :selectedItem="store.selectedGiveItem.id ? store.selectedGiveItem.name + ' ' + store.selectedGetItem.code : ''"
                    :course="store.exchanger.to.toLocaleString('ru-RU') + ' ' + store.selectedGiveItem.code"
                    :reverse="screen.width.value > 480 ? false : true"/>
                    
                    <exchange-list-block
                    title="Получаете"
                    :selectedItem="store.selectedGetItem.id ? store.selectedGetItem.name + ' ' + store.selectedGiveItem.code : ''"
                    :course="store.exchanger.get.toLocaleString('ru-RU') + ' ' + store.selectedGetItem.code"
                    :reverse="true"/>
                </div>
            </div>
            <misc-spinner v-else/>
            <div class="flex flex-col gap-1.5 justify-center">
                <span class="text-white text-opacity-50">Описание обмена</span>
                    <misc-b-input
                    name="paymentEmail"
                    inputType="primary"
                    append-icon="emailIconActive"
                    placeholder="Введите Ваш e-mail"
                    :isIconGrayscale="true"
                    />
                    <misc-b-input
                    name="paymentCard"
                    inputType="primary"
                    append-icon="Bitcoin_thumbnail"
                    placeholder="Номер карты"
                    :isIconGrayscale="true"
                    />
                    <misc-b-input
                    name="paymentBank"
                    inputType="primary"
                    append-icon="Bitcoin_thumbnail"
                    placeholder="Номер счета"
                    :isIconGrayscale="true"
                    />
                </div>
                <checkbox :checkbox="isChecked" label="Я согласен с " link-label="условиями и правилами сервиса" link="/"/>
                <misc-b-frame 
                :px="20" 
                :py="15"
                isPx>
                    <b-button 
                    @click="onClickOpenModal"
                    text="Перейти к оплате" 
                    type="Primary" 
                    size="FULL" 
                    :class="isChecked ? '' : 'disabled'"
                    class="typography-x"/>
                </misc-b-frame>
                <confirm-modal v-show="false"/>
        </exchange-list-wrapper>
        <Teleport to="#teleports" >
            <ConfirmModal v-if="isOpenConfirmModal" @close="isOpenConfirmModal = false"/>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { EXCHANGERS } from './exchangers'
import { useCurrencyStore } from '~/store/exchanger.store';
import { useWindowSize } from '@vueuse/core'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const store = useCurrencyStore()
const isChecked = ref(false)

const screen = useWindowSize()

provide('isChecked', isChecked)
const course = ref<string | null>(null)

const isOpenConfirmModal = ref(false)
const onClickOpenModal = ():void => {
    if (!store.exchanger.to && !store.exchanger.to) {
        return
    } 
    isOpenConfirmModal.value = true
}
watch(
    ():any[] => [store.selectedGetItem,store.selectedGiveItem],
    (_, [newValueA, newValueB]):void => {        
        if (newValueA.id !== -1 && newValueB.id !== -1 ) {
            let courseValue = 1 * newValueA.course
            if (store.selectedGiveItem.type !== 'COIN') {
                course.value = courseValue.toFixed(store.selectedGetItem.decimals).toLocaleString("ru-RU") + ' ' + newValueA.code + ' = 1 ' + newValueB.code
            } else {
                course.value = courseValue.toFixed(store.selectedGetItem.decimals).toLocaleString("ru-RU") + ' ' + newValueA.code + ' = 1 ' + newValueB.code
            }
        }
    },
    {deep: true}
)


interface IExchangeListProps {
    items?: any[]|null,
    data: [any]
}
defineProps<IExchangeListProps>()
// validation

const { handleSubmit } = useForm('paymentForm',{
  validationSchema: yup.object({
    PaymentBank: yup.string().required(),
    paymentCard: yup.string().required(),
    paymentEmail: yup.string().required().email(),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

</script>

<style lang="scss" scoped>
    .wrapper{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: "hero change2 change3 total";
    }
    .exchange-blocks{
        @apply flex gap-3
    }
    .disabled {
        @apply grayscale pointer-events-none select-none
    }
    .wrapper {
        @apply grid grid-cols-4 min-h-[calc(762rem/16)] gap-[0.625rem]
    }
    .title-1{
        @apply max-w-[337px] bg-gradient-to-t from-[#B49D8C] to-white bg-clip-text text-transparent
    }
    article{
        @apply flex gap-6 flex-col
    }
    .hero{
        background-image: url("~/assets/images/exchange/hero.jpg");
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
    }
    @media screen and (max-width:1025px) {
        .wrapper{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            grid-template-areas:
            "hero hero"
            "change2 change3"
            "total total" !important;
        }
    }
    @media screen and (max-width:1536px) {
        .wrapper{
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            grid-template-areas:
            "hero change2 change3"
            "total total total" !important;
        }
    }
    @media screen and (max-width:786px) {
        .wrapper {
            grid-template-columns: 1fr !important;
            grid-template-rows: 0.5fr 1fr 1fr 1fr !important;
            gap: 1.25rem 1.25rem;
            grid-template-areas:
            "hero"
            "change2"
            "change3"
            "total" !important;
        }
    }
    @media screen and (max-width:480px) {
        .exchange-blocks{
            @apply flex-col
        }
        .wrapper{
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            grid-template-areas:
            "hero hero"
            "change2 change3"
            "total total" !important;
        }
    }
</style>