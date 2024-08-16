<template>
  <div class="login-form">
    <div class="login-header">
      <b class="text-white text-opacity-50 select-none">Добро пожаловать! Создайте аккаунт</b>
      <img :src="getSvgUrl('close')" alt="" @click="global.closeModal()">
    </div>
    <form class="login-send-form" @submit.prevent>
      <Misc-BInput v-model="account.input.name" name="name" input-type="primary"
        placeholder="Пожалуйста, представьтесь" />
      <Misc-BInput v-model="account.input.email" name="email" input-type="primary" placeholder="Введите e-mail" />
      <Misc-BInput v-model="account.input.password" name="password" input-type="primary"
        placeholder="Придумайте пароль" />
      <Misc-BInput v-model="account.input.confirmPassword" name="confirmPassword" input-type="primary"
        placeholder="Повторите пароль" />
      <div v-if="account.error" class="text-red-500">* {{ account.error }}</div>
      <checkbox v-model="isChecked" label="Я согласен с " link-label="условиями и правилами сервиса" link="/"
        class="my-5" />
      <misc-b-frame :px="20" :py="15" is-px>
        <b-button text="Зарегистрироваться" type="Primary" size="FULL"
          :class="!isChecked || !isCorrect ? 'disabled' : ''" class="text-2xl font-bold" @click="createAccount" />
      </misc-b-frame>
    </form>
    <div class="login-link">
      <p class="text-white text-opacity-50 select-none">Уже есть аккаунт?
        <u class="cursor-pointer" @click="$emit('onLogInClick')">Войдите</u>
      </p>
    </div>
  </div>
</template>

<script setup>
import { watchThrottled } from '@vueuse/core';
import { useAuthStore } from '../../store/auth.store';
import { useGlobalStore } from '../../store/global.store';

// for modal
const global = useGlobalStore()
defineEmits([
  'onLogInClick'
])

const account = reactive({ input: { name: '', email: '', password: '', confirmPassword: '' }, error: '' })
const isChecked = ref(false)
const isCorrect = ref(false)

const auth = useAuthStore()

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// User input errors watcher
watchThrottled(
  () => [isCorrect.value, isChecked.value, account.input.name, account.input.email, account.input.password, account.input.confirmPassword],
  () => {
    isCorrect.value = false;
    if (account.input.name.length < 4) {
      account.error = 'Имя пользователя должно содержать не менее 4-х символов'
      return
    }
    if (account.input.email && !validateEmail(account.input.email)) {
      account.error = 'Укажите корректный e-mail'
      return
    }
    if (account.input.password !== account.input.confirmPassword) {
      account.error = 'Пароли не совпадают'
      return
    }
    if (account.input.password.length < 4) {
      account.error = 'Пароль должен содержать не менее 4-х символов'
      return
    }
    account.error = ''
    isCorrect.value = true
  },
  { throttle: 500 }
)

function createAccount() {
  if (!account.error) {
    auth.registerAccount(account.name, account.email, account.password)
  }
}

</script>

<style lang="scss" scoped>
.error-cloud {
  position: absolute;
  left: -270px;
  max-width: 260px;
  border: solid 1px tomato;
  border-radius: 15px;
  border-top-right-radius: 0px;
  padding: 10px;
  top: 85px;
  background: linear-gradient(69deg, rgba($col-accent, .25), rgba($col-accent-start, .25), rgba($col-accent, .25));
  text-shadow: white 3px 0 10px;
}
</style>