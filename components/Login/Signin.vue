<template>
  <div class="login-form">
    <div class="login-header">
      <b class="text-white text-opacity-50 select-none">Добро пожаловать! Войдите в личный кабинет</b>
      <img :src="getSvgUrl('close')" alt="" @click="global.closeModal()">
    </div>
    <form class="login-send-form h-[565px] flex flex-col" @submit.prevent>
      <Misc-BInput v-model="account.email" name="email" input-type="primary" placeholder="Введите e-mail:"
        :is-active="true" />
      <Misc-BInput v-model="account.password" name="password" input-type="primary" placeholder="Введите пароль"
        :is-active="true" />
      <div v-if="account.error" class="text-red-500">* {{ account.error }}</div>
      <div class="grow" />
      <misc-b-frame :px="20" :py="15" is-px>
        <b-button text="Войти" type="Primary" size="FULL" :class="isCorrect ? '' : 'disabled'"
          class="text-2xl font-bold" @click="loginAccount" />
      </misc-b-frame>
      <div class="login-link">
        <p class="text-white text-opacity-50 select-none">Еще нет аккаунта?
          <u class="cursor-pointer" @click="$emit('onLogInClick')">Зарегистрируйтесь</u>
        </p>
      </div>
    </form>

  </div>
</template>

<script setup>
import { watchThrottled } from '@vueuse/core';
import { getSvgUrl } from '../../composables/imageURL';

const global = useGlobalStore()
const auth = useAuthStore()

const isCorrect = ref(false)
const account = reactive({ email: '', password: '', error: '' })

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// User input errors watcher
watchThrottled(
  () => [account.email, account.password],
  () => {
    isCorrect.value = false;
    if (account.email && !validateEmail(account.email)) {
      account.error = 'Укажите корректный e-mail'
      return
    }
    if (account.password.length < 4) {
      account.error = 'Пароль должен содержать не менее 4-х символов'
      return
    }
    account.error = ''
    isCorrect.value = true
  },
  { throttle: 500 }
)

function loginAccount() {
  if (!account.error) {
    auth.loginAccount(account.email, account.password)
  }
}

</script>

<style></style>