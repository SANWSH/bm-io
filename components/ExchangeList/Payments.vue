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
const searchValue = ref('')

const searchContent = computed(() => {
   return searchValue.value.toLowerCase()
})

const store = useCurrencyStore()


</script>
<template>
    <div class="wrapper h-full">
        <h3 class="title-x">Выберите платежную систему</h3>
        <div 
        class="exchange-body-currency-wrapper" 
        @click="focusElement($event, 'search_' + id)">
            <misc-b-input
            input-type="search"
            prepend-icon="search"
            placeholder="Найти платёжную систему"
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

            <div :id="'exchange-' + id">
                <misc-spinner v-if="!store.currency"/>
                <div class="exchange-body-currency-items" v-if="!!store.currency">
                    <exchange-list-body-item 
                    v-for="curr in store.currency.data" 
                    :key="curr.id" 
                    :content="curr" />
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