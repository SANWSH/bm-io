<template>
  <div class="w-64 h-64 relative m-auto">
    <misc-spinner />
  </div>
</template>

<script setup>
import miscSpinner from '~/components/Misc/spinner.vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()
onMounted(() => {
  router.push(route.path + '/history')
})
</script>