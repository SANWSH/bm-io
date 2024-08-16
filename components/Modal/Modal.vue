<script setup>
import { useGlobalStore } from '../../store/global.store';

const target = ref(null)
const global = useGlobalStore()

function onOutsideClick(e) {
  if (e === 'modal') {
    global.closeModal()
  }
}

</script>
<template>
  <div id="modal" ref="target" class="overlay" @mousedown="onOutsideClick($event.target.id)">
    <slot />
  </div>
</template>

<style scoped>
.overlay {
  inset: 0 !important;
  transform: translateX(0px) !important;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
