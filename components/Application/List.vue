<script setup>
const temp = reactive([
  {
    number: 12312412309,
    status: 0,
    date: new Date().toLocaleString("ru-RU"),
    currencyAmount: [100, 437000],
    currencyCode: ['ETH', 'RUB']
  }
])
defineProps({
  items: Array
})
</script>
<template>
  <div class="application">
    <application-item :number="temp[0].number" :status="temp[0].status" :date="temp[0].date"
      :currency-amount="temp[0].currencyAmount" :currency-code="temp[0].currencyCode" />
  </div>
</template>
