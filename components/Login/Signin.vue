<template>
   <div class="login-form">
    <div class="login-header">
      <b class="text-white text-opacity-50">Добро пожаловать! Войдите в личный кабинет</b>
      <img :src="getSvgUrl('close')" alt="" @click="global.closeModal()">
    </div>
    <form action="" class="login-send-form">
      <Misc-BInput 
      inputType="primary"
      placeholder="Введите e-mail:"
      :isActive="true"/>
      <Misc-BInput 
      inputType="primary"
      placeholder="Введите пароль"
      :isActive="true"/>
      <checkbox label="Я согласен с " link-label="условиями и правилами сервиса" link="/" v-model="value" class="my-5"></checkbox>
      <misc-b-frame 
      :px="20" 
      :py="15"
      isPx>
        <b-button 
        @click="onClickOpenModal"
        text="Войти" 
        type="Primary" 
        size="FULL" 
        :class="isChecked? '' : 'disabled'"
        class="text-2xl font-bold"/>
      </misc-b-frame>
    </form>
    <div class="login-link">
      <p class="text-white text-opacity-50">Еще нет аккаунта?
        <u class="cursor-pointer" @click="$emit('onLogInClick')">Зарегистрируйтесь</u>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';

const global = useGlobalStore()
</script>

<style>

</style>