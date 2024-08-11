<template>
  <ul class="navigation">
    <li class="navText" v-for="navItem in items" :key="navItem.id">
        <NuxtLink :to="navItem.to" class="selectableText"> 
            {{ navItem.title }}
        </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface INavMenuProps {
  items: any[]
}
defineProps<INavMenuProps>()
</script>

<style>
  .navText{
    @apply text-white text-opacity-50 my-3
  }
</style>