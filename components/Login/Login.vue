<template>
  <div class="login">
    <transition name="sideIn">
      <login-signin v-if="type === 'SignIn'" @onLogInClick="$emit('onLogInClick', $event)"/>
    </transition>
    <transition name="sideIn">
      <login-signup v-if="type === 'SignUp'" @onLogInClick="$emit('onLogInClick', $event)"/>
    </transition>
  </div>
</template>

<script setup>
import Signin from './Signin.vue';
import Signup from './Signup.vue';

const props = defineProps({
  type: "SignIn" | "SignUp"
})
defineEmits([
  'onLogInClick'
])
</script>

<style lang="scss">
 .login{
  position: fixed;
  width: 100%;
  height: 100vh;
  pointer-events: none;
 }
 .login-form{
    @include toRem(width, 453);
    @include toRem(border-radius, 15);
    @include toRem(padding, 20);
    position: fixed;
    background: linear-gradient(to bottom, $col-exchange_1, $col-exchange_2);
    height: 100%;
    right: 0;
    top: 96px;
    z-index: 100;
    pointer-events: auto;
  }
  .login-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .login-send-form{
    display: flex;
    flex-direction: column;
    @include toRem(gap, 5);
    @include toRem(margin-top, 40);
  }
  .login-link{
    display: flex;
    justify-content: center;
    @include toRem2Values(margin,30,0)
  }
  @media screen and (max-width: 576px) {
    .login-form{
      width: 100%;
      inset: 0;
      padding-top: 96px;
      overflow: auto;
    }
  }
</style>
<style scoped>
  .overlay{
    z-index: 100!important;
  }
</style>