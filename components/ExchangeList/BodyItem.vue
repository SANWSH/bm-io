<script setup>
import { useCurrencyStore } from '../../store/exchanger.store';

defineProps({
  content: Array | Object
})

const store = useCurrencyStore()
</script>

<template>
  <!-- v-for="curr in store.currency.data"  -->
  <div v-show="!!searchContent ? content.attributes?.payment_name.toLowerCase().includes(searchContent)
    || content.attributes?.iso_code.toLowerCase().includes(searchContent) : true" :id="content.id"
    class="currency group" :class="[
      filterCurrency,
      content.id === store.selectedGiveItem.id ? 'active' : content.attributes?.name === store.selectedGetItem?.name ? 'ghost' : ''
    ]" @click.prevent="store.selectedGiveItem.apply(content)">
    <img :src="getSvgUrl('Bitcoin_thumbnail')" :alt="content.payment_name" class="currency-icon" :class="[store.getSelectedItem(isGetChanger).id === content.id ? 'active' : '',
    store.getSelectedItem(!isGetChanger).id === content.id ? 'disabled' : '',]">
    <div class="currency-title">{{ content.attributes?.payment_name }}</div>
  </div>
</template>
