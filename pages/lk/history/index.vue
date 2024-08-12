<script setup>
import AsidePanel from '~/components/AsidePanel/AsidePanel.vue';
const mocks = {
  bonuses: 10000,
  bonusPercent: 0.2,
  trades: 29,
  tradesSum: 5.43
}
</script>
<template>
  <div class="history-page">
    <AsidePanel/>
    <div class="info-panel">
      <div class="info-header">
        <div class="info-header-element">
          <h1 class="info-value">{{ mocks.bonusPercent }}%</h1>
          <small class="info-small">Бонусный процент</small>
        </div>
        <div class="info-header-element">
          <h1 class="info-value">{{ mocks.trades }}</h1>
          <small class="info-small">Обмен(ов)</small>
        </div>
        <div class="info-header-element">
          <h1 class="info-value">{{ mocks.tradesSum }}₽</h1>
          <small class="info-small">Сумма обменов</small>
        </div>
      </div>
      <div class="info-body">
        <div class="info-body-title">
          <span>История операций</span>
        </div>
        <div class="application">
          <!-- TODO: To make applications component -->
           <application-list :items="[1,2,3]"/>
<!--           <div class="application-item" v-for="item in 10" :key="item">
            <div class="application-currency">
              <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="" width="50">
              <img :src="getSvgUrl('arrowToTopRight')" alt="" class="rotate-45" width="12">
              <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="" class="disabled" width="50">
            </div>
            <div class="application-info">
              <u class="text-white text-opacity-50">Заявка №1701693628466</u>
              <div class="application-info-exchange">
                <div class="info-change-wrapper">
                  <img v-show="true" :src="getSvgUrl('Bitcoin_thumbnail')" alt="" width="50">
                  <span>0.0003 BTC</span>
                </div>
                <img :src="getSvgUrl('arrowToTopRight')" alt="" class="rotate-45" width="12">
                <div class="info-change-wrapper">
                  <img v-show="true" :src="getSvgUrl('Bitcoin_thumbnail')" alt="" width="50">
                  <span>1120.47 RUB</span>
                </div>
              </div>
            </div>
            <div class="application-result">
              <span class="text-white text-opacity-50">04 декабря 2023, 15:40</span>
              <span class="text-[#FF4E67] font-semibold">Заявка отклонена. Платеж не поступил</span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.history {
  &-page{
    display: flex;
    @include toRem(gap, 10);
    min-height: calc(100vh - 302px);
  }
}
.info-panel{
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, $col-exchange_1, $col-exchange_2);
  width: 100%;
  @include toRem(border-radius, 15);
}
.info-header{
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  border-block-end: solid #FFFFFF1A 1px ;
}
.info-header-element{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include toRem2Values(margin, 38, 0);
}
.info-value{
  @include toRem(font-size, 40);
  font-weight: 600;
}
.info-small{
  @include toRem(font-size, 14);
  color: $col-semitrans-white;
}
.info-body-title{
    @include toRem(font-size, 24);
    @include toRem(margin-bottom, 20);
    font-weight: 600;
    display: flex;
    align-content: center;
    padding-left: .875rem;
    padding-top: 1.625rem;
  }
.application{
  display: flex;
  flex-direction: column;
  @include toRem(padding, 16);
  @include toRem(gap,5);
  height: 100%;
  overflow-y: auto;
  scroll-snap-align: start;
  &-item{
    @include toRem2Values(padding, 20, 10);
    @include toRem(border-radius, 15);
    background: linear-gradient(87deg, $col-primary-1, $col-primary-2);
    display: flex;
  }
  &-currency{
    display: flex;
    @include toRem(gap,12);
  }
  &-info{
    display: flex;
    flex-direction: column;
    @include toRem(min-width, 300);
    @include toRem(margin-left, 148);
    @include toRem(gap,8);
  }
  &-info-exchange{
    display: flex;
    justify-content: space-between;
  }
  &-result{
    display: flex;
    flex-direction: column;
    @include toRem(min-width, 300);
    @include toRem(gap,2);
    margin-left: auto;
    align-self: center;
    text-align: end;

  }
  .info-change-wrapper{
    &>img{
      display: none;
    }
  }
}
@media screen and (max-width:1025px) {
  .application{
    &-currency{
      display: none;
    }
    &-item{
      flex-direction: column;
    }
    &-info{
      margin: 0;
      text-align: center;
      @include toRem(gap,10);
      min-width: auto;
    }
    &-info-exchange{
      @include toRem(max-width,300);
      align-self: center;
      width: 100%;
    }
    &-result{
      align-self: center;
      text-align: center;
      margin-right: auto;
    }
    .info-change-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      @include toRem(gap, 8);
    &>img{
      display: block;
    }
  }
  }
  .history {
  &-page{
    flex-direction: column;
    padding: 0 .625rem;
  }
}
}
@media screen and (max-width:768px) {
  .info-header{
    flex-direction: column;
    @include toRem(gap, 10);
    @include toRem(padding-bottom, 20);
  }
  .info-header-element{
    @include toRem(margin, 0);
    flex-direction: row;
    @include toRem(gap, 8)
  }
  .info-value, .info-small{
    display: block;
    width: 100%;
    height: 100%;
    flex-basis: 50%;
  }
  .info-value{
    text-align: end;
  }
}
</style>