<script setup>
import MiscBInput from '~/components/Misc/BInput.vue'
import { reactive } from 'vue';
const form = ref(null)

function showForm() {
  form.value.classList.toggle('active')
}

//#region upload preview logic
const uploaded = reactive([])

function createObject(name, source, size) {
  return { name, source, size };
}

function deleteCurrentFile(e) {
  const index = e.dataset.index;
  uploaded.splice(index, 1);
}

function addImage(event) {
  const file = event.target.files[0]
  console.log(file.size);

  if (file.size > 5.24e+6) {
    alert('Невозможно прикрепить файл: Размер файла не должен первышать 5mb')
    return
  }

  const reader = new FileReader();

  reader.onload = () => {
    const imageUrl = reader.result;

    let fileObject = createObject(file.name, imageUrl, file.size)
    uploaded.push(fileObject);
    console.log(uploaded);
  }

  reader.readAsDataURL(file);
}
//#endregion
</script>
<template>
  <div class="verify-page">
    <AsidePanel />
    <div class="verify-panel">
      <h3 class="subtitle">Верифицированные карты</h3>
      <div class="verify-header">
        <misc-PaymentCard></misc-PaymentCard>
        <misc-PaymentCard></misc-PaymentCard>
        <misc-PaymentCard></misc-PaymentCard>
        <button class="addCard" @click="showForm">
          <span>+ добавить карту</span>
        </button>
      </div>
      <div class="verify-form" ref="form">
        <h3 class="subtitle">Добавить новую карту</h3>
        <form @submit.prevent="addNewCard" class="flex-form">
          <misc-b-dropdown class="form-input-1"></misc-b-dropdown>
          <misc-b-input class="form-input-2" input-type="primary" placeholder="Ф.И.О. Владельца карты"
            :is-active="false" />
          <misc-b-input class="form-input-3" input-type="primary" placeholder="Номер карты" :is-active="false" />
          <input type="file" id="fileInput" ref="fileExplorer" accept="image/png, image/jpeg, image/gif, image/webp"
            hidden @change="addImage($event)" />
          <button class="b-button addPhoto" @click="$refs.fileExplorer.click()">
            <img :src="getSvgUrl('photo')" alt="">
            Загрузите фотографию для верификации
          </button>
          <div class="uploaded-files">
            <div class="uploades-wrapper" :data-index="i" :style="`background-image: url(${img.source})`"
              v-for="img, i in uploaded" :key="i" @click="deleteCurrentFile($event.target)">
              <span class="typography-s" style="text-wrap:pretty;">{{ img.name }}</span>
            </div>
          </div>
          <b-button type="Primary" size="M" text="Сохранить" class="mx-auto" />
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.verify-page {
  display: flex;
  position: relative;
  box-sizing: border-box;
  @include toRem(padding-bottom, 20);
  @include toRem(gap, 8);
  min-height: calc(100vh - 302px);
  ;
  width: 100%;
}

.verify-panel {
  width: 100%;
  position: relative;
  background: linear-gradient(to bottom, $col-exchange_1, $col-exchange_2);
  @include toRem(border-radius, 15);
  overflow: hidden;
}

.verify-header {
  display: flex;
  @include toRem(gap, 28);
  margin-bottom: 20px;
}

.verify-header,
verify-form {
  @include toRem(padding, 20)
}

.verify-form {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0px;
  transition: height .25s ease-in, bottom .25s ease-in, opacity .1s ease-out;
  border-top: solid $col-tab-secondary 0px;
  bottom: -50%;
  opacity: 0;

  &.active {
    height: 100%;
    bottom: 0;
    opacity: 1;
    border-top: solid $col-tab-secondary 1px;
  }
}

.addCard {
  aspect-ratio: 280 / 170;
  width: 100%;
  max-width: 280px;
  @include toRem(border-radius, 15);
  border: solid $col-tab-secondary 1px;

  &>* {
    color: $col-tab-secondary;
  }

  &:hover {
    background-color: $col-tab-secondary;

    &>* {
      color: $col-semitrans-white;
    }
  }
}

.flex-form {
  display: flex;
  flex-wrap: wrap;
  @include toRem(gap, 10);
  @include toRem(padding, 10);
}

.form-input-1,
.form-input-2 {
  flex-basis: calc((100% / 10) * 3 - 10px)
}

.form-input-3 {
  flex-basis: calc((100% / 10) * 4)
}

.subtitle {
  @include toRem(font-size, 24);
  @include toRem4Values(padding, 20, 20, 0, 20);
}

.addPhoto {
  background: linear-gradient(69deg, $col-tab-secondary, $col-cards-2);
  display: flex;
  align-items: center;
  @include toRem(gap, 22);
  width: 100%;
  justify-content: center;
  border: solid 1px #c7c7c7;
  @include toRem(padding, 20);
  @include toRem(border-radius, 15)
}

@media screen and (max-width: 1025px) {
  .verify-page {
    flex-direction: column;
    height: auto;
  }

  .verify-header {
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: center;
  }

  .verify-form {
    transition: none;
  }

  .flex-form {
    flex-direction: column;
  }

  .addCard {
    height: 50px;
    max-width: none;
  }
}

@media screen and (max-width: 768px) {
  .addCard {
    height: auto;
    flex-basis: 100%;
  }
}

.uploaded-files {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  width: 100%;

  &>.uploades-wrapper>span {
    position: absolute;
    bottom: 5px;
    left: 5px;
  }

  &>.uploades-wrapper:hover>img {}
}

.uploades-wrapper:hover::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(~/assets/svg/delete.svg);
  background-color: rgba(red, .2);
  background-position: center;
  background-size: 32px;
  z-index: 100;
  backdrop-filter: blur(10px) grayscale(100%);
  border-radius: 15px;
  inset: 0;
  pointer-events: none;
  translate: all .2s ease;
}

.uploades-wrapper:hover {
  cursor: pointer;
}

.uploades-wrapper {
  position: relative;
  width: 128px;
  aspect-ratio: 1/1;
  background-position: center;
  background-size: cover;
  @include toRem(border-radius, 15)
}
</style>