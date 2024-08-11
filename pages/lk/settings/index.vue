<script setup>
import { useCurrencyStore } from '../../../store/exchanger.store';

const store = useCurrencyStore()

const settingsTabs = ["Основные", "Мои кошелки"]
</script>

<template>
  <div class="settings-page">
    <AsidePanel/>
    <div class="settings-panel">
      <div class="settings-tabs">
        <b-button
        v-for="tab, i in settingsTabs"
        :key="i"
        type="Tab"
        :text="tab"/>
      </div>
      <div class="settings-content">
        <exchange-list-wrapper class="settings-payments">
          <exchange-list-payments>
            <div class="exchange-body-currency-items" id="2">
                <exchange-list-body-item 
                v-for="curr in store.currency.data" 
                :key="curr.id" 
                :content="curr" />
            </div>
          </exchange-list-payments>
        </exchange-list-wrapper>
        <div class="settings-accounts drop-shadow-base">
          <h3 class="title-l">Кошельки</h3>
              <exchange-list-body-item 
              v-for="curr in store.currency.data" 
              :key="curr.id" 
              :content="curr" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .settings{
    &-page{
      display: flex;
      @include toRem(gap, 10);
    }
    &-panel{
      display: flex;
      flex-direction: column;
      @include toRem(padding, 20);
      @include toRem(border-radius, 15);
      background: linear-gradient(to bottom, $col-secondary-1, $col-secondary-2)
    }
    &-tabs{
      display: flex;
      flex-direction: row;
      @include toRem(gap, 20);
      flex-shrink: 1;
    }
    &-content{
      display: flex;
    }
    &-payments{
      flex-basis: 453px;
      flex-shrink: 1;
      position: relative;
      &::after{
        content: "";
        display: block;
        position: absolute;
        width: 30px;
        height: 24px;
        background-image: url(~/assets/svg/arrow.svg);
        background-position: center;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
      }
    }
    &-accounts{
      @include toRem(padding, 20);
      flex-shrink: 3;
      background: linear-gradient(to bottom, $col-secondary-1, $col-secondary-2);
      @include toRem(border-radius, 15);
    }
  }
  @media screen and (max-width: 1025px) {
    .settings{
      &-content{
        flex-direction: column;
        @include toRem(gap, 20)
      }
      &-page{
        flex-direction: column;
      }
      &-payments::after{
        display: none;
      }
    }
  }
</style>