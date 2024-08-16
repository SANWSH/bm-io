<template>
  <div>
    <label :for="`checkbox`">
      <div :class="`input-custom relative flex ${isChecked ? 'active' : ''}`" @click.prevent="setActive()">
        <input type="checkbox" :id="`checkbox`" ref="test" class="opacity-20" :checked="isChecked">
      </div>
      <span>{{ label }}
        <NuxtLink v-if="link" :to="link">
          {{ linkLabel }}
        </NuxtLink>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
  modelValue: boolean,
  label: string,
  link?: string,
  linkLabel?: string
}>()

const isChecked = ref(props.modelValue)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function setActive() {
  isChecked.value = !isChecked.value
  emit('update:modelValue', isChecked.value)
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/vars';

a,
span {
  @apply inline m-0 p-0 text-white leading-3
}

span {
  @apply text-opacity-50
}

a {
  @apply text-opacity-60 underline
}

label {
  @apply flex items-center gap-3
}

.input-custom {
  @apply w-4 h-4 p-2 border border-white border-opacity-10 bg-transparent bg-opacity-50 rounded-lg p-3 transition-all hover:bg-white hover:bg-opacity-10 active:scale-[.85];

  &::after {
    content: '';
    background-image: url('~/assets/svg/acceptIcon.svg'), linear-gradient(-45deg, $col-accent, $col-cards-1, $col-accent);
    background-position: center;
    background-size: cover;
    @apply absolute w-full h-full scale-0 bg-orange-500 bg-opacity-75 rounded inset-0 transition-all
  }

  &.active::after {
    @apply scale-100
  }
}

input {
  @apply opacity-0 w-full h-full absolute top-0 left-0
}
</style>