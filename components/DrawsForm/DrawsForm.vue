<template>
  <div :class="`container-A5F31`" :style="{ backgroundImage: `url(${getImageUrl('backFormImg', 'jpg')})` }">
    <div class="formContainer">
      <span class="title">Вы все сделали? Заполните форму для участия!</span>
      <div class="inputsBlock">
        <misc-b-input v-model="email" placeholder="E-mail" input-type="primary" />
        <misc-b-input v-model="number" placeholder="Номер Вашего обмена" input-type="primary" />
      </div>
      <div class="acceptBlock">
        <checkbox v-model="isChecked" label="Я согласен с " link-label="условиями проведения конкурса"
          link="/user-agreements/contest" />
      </div>
      <misc-b-frame px="20" py="15" is-px>
        <b-button size="FULL" type="Primary" class="button text-2xl font-bold" :class="!isChecked ? 'disabled' : ''"
          text="Участвовать!" />
      </misc-b-frame>
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from '../../composables/imageURL';

const email = ref('')
const number = ref('')
const isChecked = ref(false)
// TODO: replace inject/provide checkbox variables to store
// const isChecked = inject('isChecked')
</script>

<style lang="scss" scoped>
.container-A5F31 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  padding-top: 20px;
  padding-bottom: 20px;
}


.formContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
  height: 100%;
  padding: 20px 20px 20px 20px;
  border-radius: 15px;
  border: 1px solid #101214;
  background: linear-gradient(93deg, rgba(39, 42, 47, 0.58) 0%, rgba(25, 29, 36, 0.58) 99.77%);
  backdrop-filter: blur(9.149999618530273px);
}

.title {
  color: rgba(255, 255, 255, 0.50);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
}

.inputsBlock {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.acceptBlock {
  display: flex;
  gap: 10px;
}

.checkbox {
  border-radius: 5px;
  border: 1px solid #3C3F46;
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.checkboxIcon {
  width: 20px;
  height: 20px;
}

.greyText {
  color: rgba(255, 255, 255, 0.50);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.rules {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.50);
}

.buttonBlock {
  border-radius: 15px;
  border: 1px solid #101214;
  background: linear-gradient(93deg, #272A2F 0%, #191D24 99.77%);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (max-width: 428px) {
  .container {
    padding-bottom: 0px;
    padding-top: 0px;
    border-radius: 15px;
  }
}

@media (max-width: 1480px) {
  .button {
    font-size: 21px !important;
  }
}
</style>