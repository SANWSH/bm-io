<template>
  <div class="news-card relative justify-between" :style="`background-image: url(${getImageUrl(image)})`">
    <b-button 
        class="font-bold h-max m-[1.25rem_1.25rem_auto_auto]"
        prepend-icon="telegram"
        text="Перейти"
        type="Secondary"
        size="S"/>
    <div class="news-info flex flex-col">
      <h3 class="news-title text-2xl font-semibold"> {{ breakText(title,36) }} </h3>
      <span class="news-description"> {{ breakText(description, 200) }} </span>
      <span class="news-date text-xs"> {{ date }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
 const props = defineProps<{
  title: string,
  description: string,
  date: string,
  image: string
 }>()

</script>

<style lang="scss">
  @import '~/assets/styles/vars';
 .news{
   &-card {
    display: flex;
    flex-direction: column;
    height: 646px;
    background-size: cover;
    @apply overflow-clip rounded-2xl
   }
   &-info{
    background: linear-gradient(45deg, $col-primary-1, $col-primary-2);
    padding: 10px;
    @apply gap-2.5 rounded-t-2xl
   }
   &-date{
    @apply ml-auto opacity-50
   }
 }
 @media screen and (max-width:1024px) {
   .news-card>.bButton{
    margin-right: auto;
    margin-left: auto;
   }
 }
</style>