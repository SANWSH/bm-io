<script setup>
const props = defineProps({
  number: Number,
  status: Number,
  date: Date,
  currencyAmount: Array,
  currencyCode: Array
})

const message = computed(() => {
  return props.status === 1 ? "Успешно! Платеж прошел" : props.status === 0 ? "Заявка отклонена. Платеж не поступил" : "Заявка в обработке"
})

const exchange = reactive({
  From: props.currencyAmount[0].toLocaleString("ru-RU") + " " + props.currencyCode[0],
  To: props.currencyAmount[1].toLocaleString("ru-RU") + " " + props.currencyCode[1]
})

</script>
<template>
  <div v-for="item in 10" :key="item" class="application-item">
    <div class="application-currency">
      <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="" width="50">
      <img :src="getSvgUrl('arrowToTopRight')" alt="" class="rotate-45" width="12">
      <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="" class="disabled" width="50">
    </div>
    <div class="application-info">
      <u class="text-white text-opacity-50">Заявка №{{ number }}</u>
      <div class="application-info-exchange">
        <div class="info-change-wrapper">
          <img v-show="true" :src="getSvgUrl('Bitcoin_thumbnail')" alt="" width="50">
          <span>{{ exchange.From }}</span>
        </div>
        <img :src="getSvgUrl('arrowToTopRight')" alt="" class="rotate-45" width="12">
        <div class="info-change-wrapper">
          <img v-show="true" :src="getSvgUrl('Bitcoin_thumbnail')" alt="" width="50">
          <span>{{ exchange.To }}</span>
        </div>
      </div>
    </div>
    <div class="application-result">
      <span class="text-white text-opacity-50"><!-- 04 декабря 2023, 15:40 --> {{ date }}</span>
      <span class="text-[#FF4E67] font-semibold">{{ message }}</span>
    </div>
  </div>
</template>