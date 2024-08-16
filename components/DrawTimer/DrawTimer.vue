<template>
  <div class="bigContainer">
    <div class="container">
      <span>До розыгрыша</span>
      <div class="timeBlock">
        <div class="timer">
          <span class="digit">{{ days }}</span>
          <span class="grey">Дней</span>
        </div>
        <div class="divider" />
        <div class="timer">
          <span class="digit">{{ hours }}</span>
          <span class="grey">Часов</span>
        </div>
        <div class="divider" />
        <div class="timer">
          <span class="digit">{{ mins }}</span>
          <span class="grey">Минут</span>
        </div>
        <div class="divider" />
        <div class="timer">
          <span class="digit">{{ sec }}</span>
          <span class="grey">Секунд</span>
        </div>
        <div class="divider" />
      </div>
      <div class="timeBlock prizeBlock">
        <div class="timer">
          <span class="digit">{{ formattedPrize }}&nbsp;₽</span>
          <span class="grey">Призовой фонд</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { prize, days, hours, mins, sec } = defineProps({
  prize: Number,
  days: Number,
  hours: Number,
  mins: Number,
  sec: Number,
})

const formattedPrize = computed(() => prize.toLocaleString())
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 10px;
  border-radius: 15px;
  background: linear-gradient(91deg, #3D4047 5.56%, #2E3136 104.85%);
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 7px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: white;
  align-items: center;
  width: 1071px;
}

.bigContainer {
  display: flex;
  justify-content: flex-end;
}

.timeBlock {
  width: 453px;
  height: 70px;
  border-radius: 15px;
  background: linear-gradient(180deg, #22252A 0%, #191B20 100%);
  box-shadow: 0px 11px 38.5px 0px rgba(0, 0, 0, 0.40);
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.timer {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.digit {
  color: #FE8349;
  font-size: 24px;
}

.grey {
  color: rgba(255, 255, 255, 0.50);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.divider {
  width: 1px;
  height: 54px;
  background: rgba(255, 255, 255, 0.10);
}

@media (max-width: 428px) {
  .container {
    flex-direction: column;
    min-width: 100%;
    padding-left: 10px;
  }

  .timeBlock {
    width: 100%;
  }
}

@media (max-width: 1480px) {
  .bigContainer {
    margin-bottom: 30px;
  }

  .container {
    width: 100%;
  }

  .timeBlock {
    flex: 2;
    width: auto;
  }

  .prizeBlock {
    flex: 1;
    width: auto;
  }
}

@media (max-width: 1025px) {
  .container {
    flex-direction: column;
    padding: 1rem;
  }

  .timeBlock {
    width: 100%;
    padding: .75rem;
  }
}
</style>