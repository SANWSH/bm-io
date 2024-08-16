<script setup>
defineProps({

})
</script>
<template>
  <div class="payment-card">
    <div class="payment-header">
      <img :src="getSvgUrl('paymentVisa')" alt="" class="payment-service" width="55">
      <span class="payment-card-number">4276 3800 4290 0986</span>
    </div>
    <div class="payment-footer">
      <div class="payment-owner">
        <span>Alexander Zubekhin</span>
      </div>
      <img :src="getImageUrl('payment-tinkoff')" alt="" class="payment-bank" width="52">
    </div>
  </div>
</template>
<style lang="scss">
.payment-card {
  aspect-ratio: 280/170;
  @include toRem(width, 280);
  background-color: $col-tab-secondary;
  @include toRem2Values(padding, 20, 10);
  @include toRem(border-radius, 15);
  display: flex;
  flex-direction: column;
  @include toRem(gap, 70);
  box-shadow: rgba($col-tab-secondary, .5) 0 -10px 22.5px 0,
    rgba(#000000, .25) 0 4px 4px 0;
  justify-content: space-between;
}

.payment-card-number,
.payment-owner {
  @include toRem(font-size, 12);
  color: $col-semitrans-white;
}

.payment-owner {
  display: inline-flex;
  position: relative;
  @include toRem(height, 34);
  border-top: $col-accent 1px solid;
  width: fit-content;
  align-self: end;
  align-items: end;
}

.payment-header,
.payment-footer {
  display: flex;
  justify-content: space-between;
}

.payment-header {
  overflow-x: scroll;
}

.payment-bank {
  @include toRem(border-radius, 15);
  @include toRem(width, 55);
}

@media screen and (max-width: 1025px) {
  .payment-card {
    width: 100%;
    flex-basis: calc(50% - 20px);
  }
}

@media screen and (max-width: 768px) {
  .payment-card {
    width: 100%;
    flex-basis: 100%;
  }
}
</style>