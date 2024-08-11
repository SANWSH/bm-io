<script setup>
import { useCurrencyStore } from '../../../store/exchanger.store';

const store = useCurrencyStore()
</script>

<template>
  <div class="settings-page">
    <AsidePanel/>
    <div class="settings-panel">
      <exchange-list-wrapper>
        <exchange-list-payments>
          <div class="exchange-body-currency-items" id="2">
              <exchange-list-body-item 
              v-for="curr in store.currency.data" 
              :key="curr.id" 
              :content="curr" />
          </div>
        </exchange-list-payments>
      </exchange-list-wrapper>
    </div>
  </div>
</template>