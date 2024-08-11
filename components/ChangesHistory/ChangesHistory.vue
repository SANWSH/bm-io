<template>
  <div class="wrapper">
    <div class="adaptiveBlock">
      <Reserv />
      <LastChanges />
      <PopularChanges />
    </div>
    <FeedbacksHistory />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
display: flex;
gap: 10px;
}

@media (max-width: 1480px) {
.adaptiveBlock {
display: flex;
gap: 10px;
}

.wrapper {
flex-direction: column;
}
}
</style>

<script setup lang="ts">
import Reserv from './Reserv.vue'
import LastChanges from './LastChanges.vue'
import PopularChanges from './PopularChanges.vue'
import FeedbacksHistory from './FeedbacksHistory.vue'
</script>