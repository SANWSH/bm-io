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
  <div id="modal" class="overlay" ref="target" @mousedown="onOutsideClick($event.target.id)">
    <slot/>
  </div>
</template>

<style scoped>
  .overlay{
    inset:0!important;
    transform: translateX(0px)!important;
  }
</style>
