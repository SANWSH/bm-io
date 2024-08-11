<template>
  <div class="exchange-card drop-shadow-base relative" >
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .exchange-card {
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, $col-secondary_1, $col-secondary-2);
      @include toRem(border-radius, 15);
      @include toRem(padding, 20);
      @include toRem(gap, 20);
      font-size: 16px;
    }
    
</style>