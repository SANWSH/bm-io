<template>
  <Modal>

    <div class="container !fixed w-full">
      <img :src="getSvgUrl('close')" alt="icon" class="close" @click="$emit('close')">
      <span class="title">Подтверждение обмена</span>
      <span class="description">
        Для завершения обмена, подтвердите введенные данные
      </span>
      <div class="center">
        <div class="divider" />
      </div>
      <div class="changeBlock">
        <div class="upperBlock">
          <exchange-list-block type="Secondary" title="Отдаете"
            :selected-item="store.selectedGiveItem.id ? store.selectedGiveItem.name + ' ' + store.selectedGiveItem.code : ''"
            :course="store.exchanger.to + ' ' + store.selectedGiveItem.code" :reverse="false" />
          <img :src="getSvgUrl('changeIcon')" alt="icon" class="changeIcon">
          <exchange-list-block type="Secondary" title="Получаете"
            :selected-item="store.selectedGetItem.id ? store.selectedGetItem.name + ' ' + store.selectedGetItem.code : ''"
            :course="store.exchanger.get + ' ' + store.selectedGetItem.code" :reverse="true" />
        </div>
        <div class="courseBlock">
          <div class="textBlock courseFlex">
            <span class="greyText">Обмен по курсу</span>
            <span class="boldText">{{ course }}</span>
          </div>
          <div class="textBlock courseFlex">
            <span class="greyText">Страна, Город</span>
            <span class="boldText">{{ location }}</span>
          </div>
        </div>
        <div class="underBlock">
          <exchange-list-block type="Secondary" :btc="btc" />
          <exchange-list-block type="Secondary" :rub="rub" />
        </div>
        <div class="buttonsBlock">
          <misc-b-frame px="20" py="15" is-px>
            <NuxtLink to="/payment">
              <BButton size="FULL" type="Primary" text="Подтвердить" />
            </NuxtLink>
          </misc-b-frame>
          <BButton size="L" type="Tertiary" class="cancelButton" text="Отменить" @click="$emit('close')">
            Отменить
          </BButton>
        </div>
      </div>
    </div>

  </Modal>
</template>

<script setup>

const store = useCurrencyStore()
defineProps({
  btc: String,
  rub: String,
  location: String,
  isOpen: Boolean,
})
defineEmits([
  'close',
])

</script>

<style>
/* #teleports {
 } */
</style>

<style scoped>
.container {
  @apply p-4 pt-10 pr-4 pb-4 rounded-xl z-[1000] -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2;
  @apply bg-gradient-to-b from-[#22252a] to-[#191b20];
  @apply shadow-md;
  @apply text-white text-base font-normal font-sans leading-normal;
  @apply w-[606px] flex flex-col relative;
}

.modal {
  @apply relative inset-auto top-auto border-none bg-none overflow-auto rounded-none outline-none p-0;
  @apply top-1/2 -translate-y-1/2 w-fit left-1/2 rounded-xl;
}

.close {
  @apply absolute w-3 h-3 top-5 right-5 cursor-pointer hover:brightness-150 transition;
}

.title {
  @apply text-3xl mb-5;
}

.description {
  @apply mb-6;
}

.center {
  @apply flex flex-col items-center;
}

.divider {
  @apply h-1 w-[606px] bg-white opacity-10 mb-10;
}

.changeBlock {
  @apply flex flex-col gap-10;
}

.upperBlock {
  @apply flex gap-4 items-center;
}

.textBlock {
  @apply flex flex-col gap-2;
}

.greyText {
  @apply text-gray-400;
}

.boldText {
  @apply font-bold;
}

.changeIcon {
  @apply w-10 h-10;
}

.courseBlock {
  @apply flex;
}

.courseFlex {
  @apply flex-1;
}

.underBlock {
  @apply flex gap-3;
}

.buttonsBlock {
  @apply flex flex-col gap-4;
}

.confirmButton {
  @apply rounded-xl border border-[#101214];
  @apply bg-gradient-to-r from-[#272a2f] to-[#191d24];
  @apply px-5 py-4;
}

.cancelButton {
  @apply opacity-50;
}
</style>