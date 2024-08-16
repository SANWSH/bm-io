<template>
  <div class="progress">
    <div class="progress-value" :class="percent >= 1 ? 'active' : ''">{{ value }}%</div>
    <div class="progress-bar-wrapper">
      <div class="progress-bar" :style="`width: ${percent * 100}%`" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    default: '0.0'
  },
  percent: {
    type: Number,
    default: 0.5
  }
})
</script>

<style lang="scss">
.progress {
  display: flex;
  @include toRem(gap, 20);
  align-items: center;
}

.progress-bar-wrapper {
  display: flex;
  flex-direction: column;
  border: solid 1px $col-transparent-white;
  width: 100%;
  @include toRem(height, 16);
  @include toRem(border-radius, 15);
  justify-content: center;
  padding: .25rem
}

.progress-bar {
  @include toRem(height, 6);
  border-radius: inherit;
  background: linear-gradient(to left, $col-accent-start, $col-accent, $col-accent-start);
}

.progress-value {
  @include toRem2Values(padding, 16, 16);
  background: #3E4146;
  @include toRem(border-radius, 15);
  min-width: calc((96/16) * 1rem);
  text-align-last: center;
}

.progress-value.active {
  background: linear-gradient(69deg, $col-accent-start, $col-accent, $col-accent-start);
}
</style>