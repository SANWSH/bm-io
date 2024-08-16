<template>
  <div class="newsWrapper">
    <div class="newsWrapper">
      <item v-for="(newspapper, i) in news.news" :key="i" :image="newspapper[i].image.middle"
        :title="newspapper[i].title" :description="newspapper[i].desc" :date="newspapper[i].date" />
    </div>
  </div>
</template>

<script setup>

// import { newsArray } from '~/components/News/newsArray';
import { useNewsStore } from '../../store/news.store';
import { onMounted } from 'vue';

const news = useNewsStore()
onMounted(() => {
  console.log(news.news);
})
</script>

<style lang="scss">
.newsWrapper {
  @apply flex flex-row gap-3
}

@media screen and (max-width: 1024px) {
  .newsWrapper {
    @apply flex-col
  }
}
</style>