<template>
  <div class="frame" 
  :style="`
  ${px ? 'padding-left:' + getCalcValue(px) + 'rem; ' : 'padding-left: 0; ' } 
  ${px ? 'padding-right:' + getCalcValue(px) + 'rem; ' : 'padding-right: 0; ' } 
  ${py ? 'padding-top:' + getCalcValue(py) + 'rem; ' : 'padding-top: 0; ' } 
  ${py ? 'padding-bottom:' + getCalcValue(py) + 'rem; ' : 'padding-bottom: 0; ' }
  `">
    <slot/>
  </div>
</template>

<script setup lang='ts'>
  const props = defineProps<{
    px: number|string,
    py: number|string,
    isPx?: boolean
  }>()

  const getCalcValue = (value:number) => {
    return props.isPx ? value / 16 : value
  }

  /*${px ? 'padding-right:' + getCalcValue(px) + 'rem; ' : 'padding-right: 0; ' } 
  ${py ? 'padding-top:' + getCalcValue(py) + 'rem; ' : 'padding-top: 0; ' } 
  ${py ? 'padding-bottom:' + getCalcValue(py) + 'rem; ' : 'padding-bottom: 0; ' } */
</script>

<style>
  .frame{
    box-sizing: border-box;
    @apply border border-white border-opacity-20 rounded-xl
  }
</style>
