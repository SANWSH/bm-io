<template>
  <div :class="`exchange-block flex basis-1/2`">
    <div :class="`flex flex-col size-full gap-2.5  ${reverse? 'self-end' : 'self-start'}`" v-if="thisCourse() !== '0'">
        <span v-if="type === 'Primary'" :class="`text-white text-opacity-50 ${reverse? 'mr-auto' : 'ml-auto'}`">{{title}}</span>
        <div :class="`exchange-currency-block gap-5 items-center ${reverse? 'flex-row-reverse self-start' : 'self-end'}`">
            <span v-if="type === 'Primary'" class="text-base font-semibold text-white text-opacity-50 text-nowrap">{{breakText(selectedItem, 11)}}</span>
            <span v-else class="text-base font-semibold text-white text-opacity-50 text-nowrap">{{ content }}</span>
            <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="currency_icon">
        </div>
        <span 
        :class="`title-2 text-nowrap ${reverse? 'mr-auto' : 'ml-auto'}`" 
        :style="`font-size: ${getFontSize(thisCourse(),24,12)}px!important`">
        {{course}}</span>
    </div>
  </div>
</template>

<script setup>
import { getFontSize } from '../../composables/FunctionsText';
const props = defineProps({
  type: {
    default: 'Primary',
    type: String,

  },
  selectedItem: String,
  course: String|Number,
  title: String,
  reverse: Boolean,
  content: Array|Object
})
const thisCourse = () => {
  if (typeof props.course === "number" && props.course) {
    return props.course.toString()
  } else if (props.course === undefined) {
    return 'undefined'
  } 
  return props.course
}
</script>

<style lang="scss">
@import '~/assets/styles/vars';
.exchange-block {
        background: linear-gradient(45deg, $col-primary-1, $col-primary-2);
        @apply p-4 rounded-2xl;
    }
    .exchange-currency-block{
        @apply flex
    }
</style>