<template>
  <div :class="$style.container">
    <div v-for="(el, index) in feedbacks" :key="index" :class="$style.item">
      <div :class="$style.upperBlock">
        <div :class="$style.feedbackNum">
          <img :src="heartIcon" :class="$style.heartIcon" alt="icon">
          <span>Отзыв {{ index + 1 }}</span>
        </div>
        <span>{{ el.date }}</span>
      </div>
      <div :class="$style.messageBlock">
        <span :class="$style.name">{{ el.name }}</span>
        <span>{{ el.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import heartIcon from '../assets/heartIcon.svg'
import { ref } from 'vue'

const feedbacks = ref([
  // your feedback data here
  { date: '2022-01-01', name: 'John Doe', message: 'This is a feedback message' },
  { date: '2022-01-02', name: 'Jane Doe', message: 'This is another feedback message' },
  // ...
])
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 42%;
  padding-top: 36px;
  padding-bottom: 36px;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  border-radius: 15px;
  border: 1px solid #D9D9D9;
  box-shadow: 2px 2px 7.7px 0px rgba(0, 0, 0, 0.47);
  flex: 4;
  scrollbar-width: thin;
  scrollbar-color: #fff rgba(255, 255, 255, 0.1);
}

.item {
  border-radius: 15px;
  background: linear-gradient(67deg, #FB7844 -6.44%, #4F545A 78.32%);
  box-shadow: 0px 4px 8.9px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  gap: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 587px;
  height: 172px;
}

.upperBlock {
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.50);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.feedbackNum {
  display: flex;
  gap: 10px;
  align-items: center;
}

.heartIcon {
  width: 10px;
  height: 8px;
}

.messageBlock {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.name {
  font-size: 24px;
  font-weight: 600;
}

@media (max-width: 1480px) {
  .wrapper {
    max-width: 100%;
  }
}
</style>