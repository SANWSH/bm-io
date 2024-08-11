<script setup>
import { CURRENCY } from './exchangers';
import { getSvgUrl } from '~/composables/imageURL';
import { useCurrencyStore } from '../../store/exchanger.store';
const props = defineProps({
    id: Number,
    inputValue: String,
    idSelected: Number,
    placeholder: String,
    prefix: String

})
defineEmits([
    'update:inputValue', 
])
const changeValue = ref(null)
const searchValue = ref('')

const searchContent = computed(() => {
   return searchValue.value.toLowerCase()
})

const store = useCurrencyStore()

const isGetChanger = props.id === 2? false : true

function filterCurrency() {
    return selectedType === curr.attributes.out_currency?.currency_type ? '' 
    : selectedType === '_all' ? '' : 'hidden', store.getSelectedItem(isGetChanger).id === curr.id? 'active' : ''
} 
//selectedType === [curr.attributes.out_currency.currency_type ? '' : selectedType === '_all' ? '' : 'hidden', store.getSelectedItem(isGetChanger).id === curr.id? 'active' : '']
const selectedType = ref('_all')

const focusElement = (event, elementId) => {
    const element = event.target.querySelector(`#${elementId}`);
    if (element) {
        element.focus();
    }
}

function filterByType(type) {
   selectedType.value = type
}

function multiply(value) {
    return value * store.selectedGetItem.course
}

const valueComputed = computed({
    get: () => store.exchanger.to,
    set: () => store.exchanger.get * store.selectedGetItem.course  
})


</script>
<template>
    <div class="wrapper h-full">
        <label for="exchange" class="exchange-body-input-wrapper" 
        @click="focusElement($event, 'input_' + id)">
            <misc-b-input
            v-if="id === 2"
            input-type="primary"
            placeholder="Введите сумму"
            append-icon="Bitcoin_thumbnail"
            :prefix="store.selectedGiveItem.code"
            is-icon-grayscale="true"
            v-model:="store.calculatedGive.value"
            />
            <misc-b-input
            v-if="id === 3"
            input-type="primary"
            placeholder="Введите сумму"
            append-icon="Bitcoin_thumbnail"
            :prefix="store.selectedGetItem.code"
            is-icon-grayscale="true"
            v-model="store.exchanger.get"
            />
            <transition name="fade"> 
                <small v-if="id === 3" v-show="store.currentTab == 1">
                    {{ 'Курс: ' + store.selectedGetItem.course.toFixed(store.selectedGetItem.decimals).toLocaleString("ru-RU") 
                    + ' ' + store.selectedGetItem.code}}</small>
            </transition>
            <transition name="fade"> 
                <small v-if="id === 3" v-show="store.currentTab == 0">
                    {{ 'Резерв: ' + store.selectedGetItem.reserve.toLocaleString("ru-RU") + ' ' + store.selectedGetItem.code
                    + '' ?? store.details.res.attributes.max_out}}</small>
            </transition>
            <transition name="fade"> 
                <small v-if="id === 2">
                    От <span class="link" :class="store.exchanger.to < store.details.res?.attributes?.min_in? 'danger': ''">
                    {{ store.details.res?.attributes?.min_in + ' ' + 
                        store.selectedGiveItem.code 
                    }}</span>
                    до <span class="link" :class="store.exchanger.to > store.details.res?.attributes?.max_in? 'danger': ''">
                    {{
                        store.details.res?.attributes?.max_in + ' ' +
                        store.selectedGiveItem.code
                    }} </span>
                </small>
            </transition>
        </label>
        <div 
        class="exchange-body-currency-wrapper" 
        @click="focusElement($event, 'search_' + id)">
            <misc-b-input
            input-type="search"
            prepend-icon="search"
            placeholder="Найти валюту"
            v-model="searchValue"/>
            <div class="exchange-body-currency-tabs">
                <b-button 
                v-for="curr in CURRENCY" 
                :key="curr.id" 
                :text="curr.title" 
                size="XS" 
                type="Tab" 
                @click="filterByType(curr.id)"
                :class="selectedType === curr.id ? 'active' : '' "/>
            </div>
            <!-- currency list GIVE -->
            <div :id="'exchange-' + id" v-if="id === 2">
                <misc-spinner v-if="!store.currency || !store.currencyOperations"/>
                <div class="exchange-body-currency-items" v-if="store.currency && store.currencyOperations">
                    <div 
                    v-for="curr in store.currency.data" 
                    class="currency group" 
                    :key="curr.id" 
                    v-show="!!searchContent? curr.attributes.payment_name.toLowerCase().includes(searchContent) 
                            || curr.attributes.iso_code.toLowerCase().includes(searchContent) : true"
                    :class="[
                        filterCurrency, 
                        curr.id === store.selectedGiveItem.id? 'active' : curr.attributes.name === store.selectedGetItem.name? 'ghost' : ''
                        ]"
                    @click.prevent="store.selectedGiveItem.apply(curr)" 
                    :id="curr.id">
                    <img :src="getSvgUrl('Bitcoin_thumbnail')" :alt="curr.payment_name" class="currency-icon"
                        :class="[store.getSelectedItem(isGetChanger).id === curr.id? 'active' : '', 
                        store.getSelectedItem(!isGetChanger).id === curr.id? 'disabled' : '',]"/>
                        <div class="currency-title">{{ curr.attributes.payment_name }}</div>
                    </div>
                </div>
            </div>
            <!-- currency list GET -->
            <div :id="'exchange-' + id" v-if="id === 3">
                <misc-spinner v-if="!store.currency || !store.currencyOperations"/>
                <div class="exchange-body-currency-items" v-if="store.cleanedCurrencyList">
                    <div 
                    v-for="curr in store.cleanedCurrencyList" 
                    class="currency group" 
                    :key="curr.id" 
                     v-show="!!searchContent? curr.attributes.out_currency.payment_name.toLowerCase().includes(searchContent) 
                            || curr.attributes.out_currency.iso_code.toLowerCase().includes(searchContent) : true"
                    :class="[
                        filterCurrency, 
                        curr.id === store.selectedGetItem.id? 'active' : curr.attributes.name === store.selectedGiveItem.name? 'ghost' : ''
                        ]"
                    @click.prevent="store.selectedGetItem.apply(curr)" 
                    :id="curr.id">
                    <img :src="getSvgUrl('Bitcoin_thumbnail')" :alt="curr.payment_name" class="currency-icon"
                        :class="[store.getSelectedItem(true).id === curr.id? 'active' : '', 
                        store.getSelectedItem(!isGetChanger).id === curr.id? 'disabled' : '',]"/>
                        <div class="currency-title">{{ curr.attributes.out_currency.payment_name }}</div>
                    </div>
                    <small v-if="store.selectedGiveItem.id === -1">Выберите валюту которую хотите обменять</small>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .currency {
        @apply p-[1rem_1.25rem] inline-flex w-full items-center cursor-pointer font-normal gap-3;
        scroll-snap-align: start;
        &-icon{
            @apply invert grayscale opacity-50 transition-all bg-center select-none pointer-events-none
        }
        &-icon:not(.disabled) {
            @apply group-hover:invert-0 group-hover:grayscale-0 brightness-[.85]
        }
        &-icon.disabled{
            @apply pointer-events-none brightness-[.9]
        }
        &-icon.active{
            @apply invert-0 grayscale-0 opacity-100
        }
        &.active{
            @apply bg-gradient-to-br from-[#3D4047] to-[#2E3136] rounded-2xl drop-shadow-lg shadow-black
        }
        &.ghost{
            @apply  bg-[#3D4047] bg-opacity-10 rounded-2xl
        }
        &.disabled{
            @apply opacity-100 cursor-not-allowed bg-gradient-to-br from-[#3D404735] to-[#2E313635] bg-opacity-5 rounded-2xl
        }
    }
    .exchange {
        &-body-currency-wrapper{
           @apply flex flex-col gap-[.625rem] mt-[.625rem] h-full w-full
        }
        &-body-currency-tabs{
            @apply flex flex-row justify-stretch w-full flex-wrap gap-1
        }
        &-body-currency-items{
            @apply overflow-y-auto max-h-[370px] mt-[.625rem] w-full;
            scroll-snap-type: y mandatory;
        }
        &-body-input-icon-wrapper{
            @apply inline-flex items-center gap-2
        }
        &-body-input{
            @apply inline-flex placeholder:text-white justify-between placeholder:opacity-20 outline-none p-[1.5rem_1.25rem]
        }
    }
    .hidden {
        display: none;
    }
    .icon-text{
        @apply font-semibold select-none uppercase
    }
</style>
<style lang="scss" scoped>
    .wrapper{
        @apply flex flex-col gap-[.625rem] h-full
    }
    small{
        @apply font-normal text-base opacity-50
    }
</style>