<template>
  <div class="exchange-card shadow-xl shadow-[#00000020] relative" >
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .exchange-card {
        @apply flex flex-col bg-gradient-to-t from-[#22252A] to-[#191B20] rounded-2xl p-5 gap-[1.25rem];
        font-size: 16px;
    }
    
</style>