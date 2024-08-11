<template>
  <div class="container">
    <div class="logoBlock">
      <NuxtLink to="/" class="linkWrapper"><img src="~/assets/svg/logo.svg" class="logo" alt="logo" /></NuxtLink>
      <div class="logoText">
        <span class="text-white opacity-50">Политика конфинденциальности</span>
        <span class="text-white opacity-50">COPYRIGHT © 2014-{{ date }} BITMAFIA</span>
      </div>
    </div>
    <div class="contactsBlock">
      <span>Контакты</span>
      <NuxtLink href="mailto:bitbafia@official.ru" class="text-white opacity-50">bitbafia@official.ru</NuxtLink>
    </div>
    <div class="contactsBlock">
      <div v-for="(el, index) in items" :key="index">
        <NuxtLink :to="el.to" :class="'text-white opacity-50 ' + 'selectableItem'">{{ el.title }}</NuxtLink>
      </div>
    </div>
    <div class="buttonsBlock">
      <b-button size="S" type="Link" text="Войти"></b-button>
      <b-button size="S" type="Primary" text="Регистрация"></b-button>
    </div>
    <div class="mobileUnderBlock">
      <div class="logoTextMobile">
        <span class="text-white opacity-50">Политика конфинденциальности</span>
        <span class="text-white opacity-50">COPYRIGHT © 2014-{{ date }} BITMAFIA</span>
      </div>
      <div class="adBlock">
        <div class="left">designed and development by</div>
        <img src="~/assets/svg/ad_edible.svg" class="adLogo" alt="ad" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  interface IFooterProps {
      items: any[]
  }
  defineProps<IFooterProps>()

  const isOpen = ref<boolean>(false)

  const date: number = new Date().getFullYear()
  const handleClose = () => {
    isOpen.value = false
  }
</script>

<style lang="scss" scoped>
@import '~/assets/styles/vars';

.linkWrapper{
  display: flex;
}
.container {
  border-radius: 15px 15px 0px 0px; 
  background: linear-gradient(90deg, #212429 1.54%, #191D20 100.86%);
  padding: 40px 40px 40px 40px;
  display: flex;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  align-items: center;
  margin-left: -40px;
  margin-right: -40px;
  margin-top: 2rem;
  }
  
  .logoBlock {
      flex: 3;
  }
  
  .logo {
  width: 210px;
  height: 47px;
  margin-bottom: 20px;
  }
 
  .logoText {
  display: flex;
  flex-direction: column;
  gap: 9px;
  }
  
  .contactsBlock {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 7px;
  }
  
  .buttonsBlock {
      flex: 4;
      display: flex;
      gap: 10px;
      align-items: center;
      }
  
      
    
  .adBlock {
  flex: 1;
  display: flex;
  gap: 17px;
  padding-left: 8px;
  padding-right: 12px;
  width: 199px;
  height: 42px;
  border-radius: 10.257px;
  border: 0.684px solid #787878;
  align-items: center;
  box-sizing: content-box;
  }
  
  .left {
      flex: 1;
      color: #787878;
      text-align: right;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 107px;
  flex-shrink: 0;
  }
  
  .adLogo {
  width: 70px;
  height: 19px;
  flex: 1;
  }
  
  .divider {
  display: none;
  }
  
  .logoTextMobile {
  display: none;
  }
  
  @media (max-width: 1025px) {
  .container {
  flex-direction: column;
  gap: 60px;
  margin-left: 0px;
  margin-right: 0px;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 0px;
  padding-right: 0px;
  }
  
  .logo {
  margin-bottom: 10px;
  }
  
  .logoText {
  display: none;
  }
  
  .logoTextMobile {
  display: flex;
  flex-direction: column;
  gap: 9px;
  }
  
  .contactsBlock {
  flex: auto;
  gap: 20px;
  align-items: center;
  }
  
  .buttonsBlock {
  flex-direction: column;
  gap: 31px;
  flex: auto;
  padding-bottom: 26px;
  }
  
  
  .mobileUnderBlock {
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-top: 1px solid rgba(218, 218, 218, 0.50);
  width: 100%;
  align-items: center;
  padding-top: 40px;
  }
  
  .left {
  padding-bottom: 5px;
  padding-top: 5px;
  }
  }
  
  @media (max-width: 1480px) {
      .container {
      padding: 40px 20px 40px 20px;
      gap: 3.75rem;
      }
  
  
  .logo {
      width: 180px;
      height: 40px;
      margin-bottom: 10px;
  }
  
  .contactsBlock {
  flex: inherit;
  gap: 1.25rem;
  }
  
  .buttonsBlock {
  gap: 0px;
  }
  }
</style>