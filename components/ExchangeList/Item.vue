<script setup>
import ExchangeWrapper from './Wrapper.vue';
import ExchangeBody from './Body.vue';
import { useCurrencyStore } from '../../store/exchanger.store';
const store = useCurrencyStore()
const props = defineProps({
  title: String,
  items: Array,
  id: Number,
})
function handleTextChange(event) {
  if (props.id === 2) {
    return;
  }
  store.currentTab = event.target.id
  console.log(event, store.isReserve.value);

}
defineEmits(['value:ChangePosition'])
</script>
<template>
  <exchange-wrapper :class="id === 1 ? 'background-hero' : ''">
    <div v-if="items" class="exchange-header flex">
      <h1 class="title-l">{{ title }}</h1>
      <div v-if="id === 3" class="exchange-header-wrapper">
        <component :is="item.is" v-for="(item, i) in items" :id="i" :key="i"
          :class="`${item.className} ${item.icon ? 'changeCurrencyIcon' : ''} ${store.isReserve ? 'active' : ''}`"
          @click="handleTextChange($event)"> {{ item.text }} </component>
      </div>
      <div v-if="id === 2" class="exchange-header-wrapper !hidden">
        <component :is="items[0].is" :ref="items[0].text + id"
          :class="`${items[0].className} ${items[0].icon ? 'changeCurrencyIcon' : ''}`"
          @click="$emit('value:ChangePosition')"> {{ items[0].text }} </component>
      </div>
    </div>
    <exchange-body v-if="id !== 1 && id !== 4" :id="id" />
  </exchange-wrapper>
</template>

<style lang="scss">
.changeCurrencyIcon {
  background: url('/assets/svg/giveMoneyIcon.svg');
  width: 40px;
  height: 40px;
  @apply transition-all hover:brightness-200
}

.exchange-header {
  @apply inline-flex w-full justify-between relative h-[40px];

  &-wrapper {
    @apply inline-flex gap-1;
  }

  &-title {
    @apply font-semibold text-2xl
  }
}

.typeTab {
  @apply bg-gradient-to-r from-[#3D4047] to-[#2E3136] opacity-50 px-[0.625rem] py-[0.3125rem] rounded-md transition-opacity font-light
}

.typeTab.active, .typeTab:hover {
  @apply opacity-100
}

.background-hero {
  background-image: url("/assets/images/exchange/hero.jpg") !important;
  background-size: contain;
}
</style>