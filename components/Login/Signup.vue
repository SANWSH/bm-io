<template>
  <div class="login-form">
    <div class="login-header">
      <b class="text-white text-opacity-50">Добро пожаловать! Создайте аккаунт</b>
      <img :src="getSvgUrl('close')" alt="" @click="global.closeModal()">
    </div>
    <VeeForm method="POST" class="login-send-form" submit.prevent="createAccount()">
      <vTextField 
      name="100" 
      class="input-primary" 
      placeholder="Придумайте логин"/>
<!--       <VeeField 
      inputType="primary"
      placeholder="Пожалуйста представьтесь"
      v-model="accountData.name"
      :isActive="true"/>
      <VeeField
      inputType="primary"
      placeholder="Введите e-mail:"
      v-model="accountData.email"
      :isActive="true"/>
      <VeeField
      inputType="primary"
      placeholder="Придумайте пароль"
      v-model="accountData.password"
      :isActive="true"/>
      <VeeField
      inputType="primary"
      placeholder="Повторите пароль"
      v-model="accountData.confirmPassword"
      :isActive="true"/> -->
      <div class="error-cloud" v-if="!!error" v-html="error"/>
<!--       <div class="error-cloud" v-if="!!error">
        <p>{{ accountData }}</p>
      </div> -->
      <checkbox label="Я согласен с " link-label="условиями и правилами сервиса" link="/" :checkbox="isChecked" class="my-5"></checkbox>
      <misc-b-frame 
      :px="20" 
      :py="15"
      isPx>
        <b-button 
        text="Зарегистрироваться" 
        type="Primary" 
        size="FULL" 
        @click="!error? createAccount(): ''"
        :class="isChecked && !error ? '' : 'disabled'"
        class="text-2xl font-bold"/>
      </misc-b-frame>
    </VeeForm>
    <div class="login-link">
      <p class="text-white text-opacity-50">Уже есть аккаунт?
        <u class="cursor-pointer" @click="$emit('onLogInClick')">Войдите</u>
      </p>
    </div>
    <v-btn size="x-large">Зарегистрироваться</v-btn>
  </div>
</template>

<script setup>
import { watchThrottled } from '@vueuse/core';
import { useAuthStore } from '../../store/auth.store';
import { useGlobalStore } from '../../store/global.store';
const global = useGlobalStore()
defineEmits([
  'onLogInClick'
])
const isChecked = ref(true)
const error = ref(null)

const accountData = reactive({name: null, email: null, password:null, confirmPassword:null})
const auth = useAuthStore()

watchThrottled(
  () => [accountData.confirmPassword, accountData.password],
  () => {
    if(accountData.password === accountData.confirmPassword) {
      console.log('right');
      error.value = null
    } else {
      error.value = '<span> - Пароли не совпадают </span>'
    }
    if(accountData.password.length < 4) {
      error.value = '<span> - Пароль должен содержать больше 3-х символов</span>'
    }
  },
  {throttle: 500}
)

function createAccount() {
  if(accountData.password === accountData.confirmPassword) {
    auth.registerAccount(accountData.name, accountData.email, accountData.password)
  } else {
    throw new Error('Пароли не совпадают')
  }
}

</script>

<style lang="scss" scoped>
  .error-cloud{
    position: absolute;
    left: -270px;
    max-width: 260px;
    border: solid 1px tomato;
    border-radius: 15px;
    border-top-right-radius: 0px;
    padding: 10px;
    top: 85px;
    background: linear-gradient(69deg, rgba($col-accent, .25),rgba($col-accent-start, .25),rgba($col-accent, .25));
    text-shadow: white 3px 0 10px ;
  }
</style>