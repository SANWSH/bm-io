<script setup>
  const props = defineProps({
    items: Array
  })
</script>
<template>
<div class="application" v-if="currentTab === 'operations'">
    <application-item 
    number=""
    status="Number",
    date="String",
    currencyAmount="Array",
    currencyCode="Array"
    >
  </application-item>
</div>
</template>
