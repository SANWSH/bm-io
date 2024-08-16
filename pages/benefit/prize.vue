<template>
  <div class="flex flex-col gap-5">
    <benefits-list class="selected" />
    <DrawTimer :prize="10000" :days='timer.days' :hours='timer.hours' :mins='timer.minutes' :sec='timer.seconds' />
    <DrawCourse />
    <Winners />
    <DrawsForm />
    <DrawsRules />
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const isChecked = ref(false)
provide('isChecked', isChecked)

const deadline = new Date('09/19/2024 10:22 AM')
const now = ref(new Date())

// const days = ref(null)
// const hours = ref(null)
// const minutes = ref(null)
// const seconds = ref(null)

const timer = reactive({
  seconds: null,
  minutes: null,
  hours: null,
  days: null,
})
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

let intervalId = null

function showRemaining() {
  now.value = new Date()
  const distance = deadline.getTime() - now.value.getTime()
  if (distance <= 0) {
    clearInterval(intervalId)
    return 'EXPIRED'
  }
  timer.days = Math.floor(distance / DAY).toString().padStart(2, '0')
  timer.hours = Math.floor((distance % DAY) / HOUR).toString().padStart(2, '0')
  timer.minutes = Math.floor((distance % HOUR) / MINUTE).toString().padStart(2, '0')
  timer.seconds = Math.floor((distance % MINUTE) / SECOND).toString().padStart(2, '0')
}

intervalId = setInterval(showRemaining, SECOND)

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style lang="scss"></style>