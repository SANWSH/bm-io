<template>
  <div :class="`container-AGBDLCID`">
    <div v-for="(el, index) in rules" :key="index" class="item">
      <div>{{ el.text }}</div>
    </div>
  </div>
</template>

<script setup>
import { rules } from './DrawsArray';
</script>

<style scoped lang="scss">
.container-AGBDLCID {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
}

.item {
  padding: 20px 20px 20px 20px;
  border-radius: 15px;
  background: linear-gradient(91deg, #3D4047 5.56%, #2E3136 104.85%) !important;
  flex: 1;
}

@media (max-width: 768px) {
  .container-AGBDLCID {
    margin-bottom: 60px;
    flex-direction: column;
  }

  .item {
    height: 172px;
  }
}
</style>