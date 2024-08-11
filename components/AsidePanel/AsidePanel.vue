<script setup>
const tabs = [
  {link: '/lk/history', title: 'История операций'},
  {link: '/lk/verify', title: 'Верификация карт'},
  {link: '/lk/referal', title: 'Реферальная программа'},
  {link: '/lk/settings', title: 'Настройки'},
]
</script>
<template>
  <aside class="aside-panel">
    <div class="aside-info">
      <h1 class="font-semibold text-2xl">Всего бонусов</h1>
      <span class="aside-info-value text-[40px]">10 000 ₽</span>
      <small class="text-white text-opacity-50">Вывод доступен от 100₽</small>
    </div>
  <div class="aside-tabs-wrapper">
    <NuxtLink v-for="tab in tabs" :key="tab.title" :to="tab.link">
      <b-button type="TabSecondary" size="2XL" :text="tab.title" 
      :class="$route.fullPath === tab.link? 'active' : ''"/>
    </NuxtLink>
  </div>
</aside>
</template>


<style lang="scss">
.aside{
  &-panel{
    background: linear-gradient(to bottom, $col-primary-1, $col-primary-2);
    min-height: 100%;
    min-width: 300px;
    @include toRem(padding, 10);
    @include toRem(border-radius, 15);
  }
  &-info{
    @include toRem(padding,10);
    @include toRem(border-radius, 15);
    background: linear-gradient(to bottom, $col-exchange_1, $col-exchange_2);
    display: flex;
    flex-direction: column;
    @include toRem(gap, 10);
    width: 100%;
  }
  &-info-value{
    @include toRem(font-size, 40);
    font-weight: 600;
    background-image: linear-gradient(45deg, $col-accent,$col-cards-1,$col-accent);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  &-tabs-wrapper{
    display: flex;
    flex-direction: column;
    @include toRem(gap, 10);
    @include toRem(padding, 10);
    @include toRem(border-radius, 15);
  }
}
@media screen and (max-width:1025px) {
  .aside {
    &-panel{
      background: transparent!important;
      padding: 0;
    }
    &-tabs-wrapper{
      flex-direction: row;
      justify-content: center;
    }
  } 
}
@media screen and (max-width:768px) {
  .aside{
    &-tabs-wrapper{
      overflow-x: auto;
      justify-content: start;
      scroll-padding-left: 10px;
    }
  }
}
</style>