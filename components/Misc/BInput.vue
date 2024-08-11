<template>
<div :class="`b-input group exchange-${inputType}`">
  <div :class="`exchange-body-wrapper`" @click="setFocus(refInput)">
    <img :src="getSvgUrl(prependIcon)" alt="" v-if="prependIcon" 
    :class="`exchange-body-${inputType}-icon select-none`">
    <input 
    :id="inputType" 
    :class="`exchange-body-input w-full`" 
    :placeholder="placeholder" 
    :type="inputType === 'primaryA' ? 'number' : 'text'"
    :disabled="isActive === false? true : false"
    :value="modelValue || inputValue" 
    :name="name"
    @input="$emit('update:modelValue', $event.target.value)"
    >
    <div class="exchange-body-icon-wrapper" v-if="appendIcon">
      <span v-if="prefix" class="prefix">{{ prefix }}</span>
      <img :src="getSvgUrl(appendIcon)" alt="" 
      :class="`exchange-body-${inputType}-icon select-none ${isActive || isIconGrayscale? 'active gray' : 'active'}`">
    </div>
  </div>
  <small v-if="infoValue || infoDisabled " :class="infoClass"> {{ infoValue }} </small>
</div>
</template>

<script setup lang="ts">
import { onlyNumbers } from '../../composables/FunctionsText';

interface IInputProps {
  inputType: 'search' | 'primary'
  name: string,
  prependIcon?: string,
  appendIcon?:string,
  infoValue: string,
  infoDisabled: {
    type: boolean,
    default: false
  }
  placeholder?: string
  modelValue: string
  prefix?:string
  isActive?: {
    type: boolean,
    default: true
  },
  inputValue?: string,
  infoClass?: string,
  isIconGrayscale?: {
    type: boolean,
    default: false
  }
}

const props = defineProps<IInputProps>()
defineEmits<{
  'update:modelValue': [value: number | string]
}>()

const refInput = ref<HTMLElement | null>(null)

function setFocus(item:HTMLElement) {
  item.focus()
}

function inputEvent(value:string):void {
  onlyNumbers(value)
  emit('update:modelValue', value)
}

</script>

<style scoped lang="scss">
  @import '~/assets/styles/vars';
  .group{
    cursor: text;
  }
  small{
    @apply text-[16px] mt-3 block
  }
  .b-input.exchange-primary{
    @apply h-[70px]
  }
  .exchange {
    &-primary { 
      background: linear-gradient(69deg, $col-tab-secondary, $col-cards-2);
      @apply rounded-2xl
    }
    &-body-input{
      @apply bg-transparent outline-none placeholder:opacity-10 placeholder:text-[#FFF]
    }
    &-body-search-icon{
      @apply opacity-10 group-hover:opacity-50 transition-opacity
    }
    &-body-primary-icon{
      @apply invert grayscale group-hover:invert-0 group-hover:grayscale-0 group-focus:invert-0 group-focus:grayscale-0 transition-all;
      &.active{
        @apply invert-0 grayscale-0
      }
      &.active.gray{
        @apply grayscale invert brightness-[.8] opacity-75
      }
    }
    &-body-wrapper {
      @apply flex relative
    }
    &-body-icon-wrapper{
      @apply flex items-center justify-center right-2 absolute h-full gap-2
    }
  }
  .exchange {
        &-body-input-wrapper{
            @apply flex flex-col gap-[.625rem] cursor-text
        }
        &-body-search-wrapper{
           @apply p-[1rem_1.25rem] flex flex-row cursor-text border border-white border-opacity-10 rounded-2xl transition-all
           hover:border-opacity-50
        }
        &-body-currency-wrapper{
           @apply flex flex-col gap-[.625rem] mt-[.625rem]
        }
        &-body-search{
            @apply bg-transparent outline-none placeholder:opacity-10 placeholder:text-[#FFF]
        }
        &-body-search-icon{
            @apply opacity-10 group-hover:opacity-50 transition-opacity;
        }
        &-body-currency-tabs{
            @apply flex flex-row justify-stretch w-full flex-wrap gap-1
        }
        &-body-currency-items{
            @apply overflow-y-auto max-h-[370px] mt-[.625rem];
            scroll-snap-type: y mandatory;
        }
        &-body-input-icon-wrapper{
            @apply flex items-center gap-2 h-full w-max gap-2
        }
        &-body-input{
            @apply inline-flex placeholder:text-white justify-between placeholder:opacity-40 outline-none p-[1.5rem_1.25rem]
        }
        &-search{
          @apply rounded-2xl border-white border-opacity-10 border px-5 relative
        }
    }
</style>
