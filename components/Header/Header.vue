<template>
<div class="container">
    <nuxt-link to="/"><img src="@/assets/svg/logo.svg" class="logo" alt="logo" /></nuxt-link>
    <img 
    v-if="screenLaptop" 
    src="@/assets/svg/menuBar.svg" 
    class="menuBar" 
    alt="menu" 
    id="burger"
    @click="($event) => {
        if (gl.currentModal !== $event.target.id) {
            gl.openModal((e) => gl.identifyModal(e), $event.target.id)
        } else {
            gl.closeModal()
        }
    }" />
    <transition name="appearance">
    <div v-if="gl.isModalOpen && gl.currentModal === 'burger'" class="infoBlockMobile">
        <HeaderNav :items="items"/>
        <div class="buttonsBlock">
            <b-button 
            type="Link" 
            size="S" 
            text="Войти"
            id="login" 
            @click="gl.openModal((e) => {
                gl.identifyModal(e)
                gl.loginFormType = 'SignIn'
            }, 'login')"/>
            <b-button 
            class="button" 
            size="S" 
            type="Primary" 
            text="Регистрация"
            @click="gl.openModal((e) => {
                gl.identifyModal(e)
                gl.loginFormType = 'SignUp'
            }, 'login')"/>
            
        </div>
    </div>
    </transition>
    <div v-if="!screenLaptop" class="infoBlock">
    <HeaderNav :items="items"/>
    <div class="buttonsBlock">
        <b-button 
        type="Link" 
        size="S" 
        text="Войти"  
        @click="gl.openModal((e) => {
            gl.identifyModal(e)
            gl.loginFormType = 'SignIn'
        }, 'login')"/>
        <b-button 
        class="button" 
        size="S" 
        type="Primary" 
        text="Регистрация"
        @click="gl.openModal((e) => {
            gl.identifyModal(e)
            gl.loginFormType = 'SignUp'
        }, 'login')"/>
    </div>
    </div>
    <teleport to="#teleports">
        <transition name="appearance">
            <Modal v-if="gl.isModalOpen">
                <login 
                :type="gl.loginFormType"
                @onLogInClick="gl.changeLogInType()"
                v-if="gl.isModalOpen && gl.currentModal === 'login'"/>
            </Modal>
        </transition>
    </teleport>
</div>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import { useGlobalStore } from '../../store/global.store';


const screen = window

const gl = useGlobalStore()
function setLoginType(type) {
    gl.loginFormType.value = type
}

const formType = ref('SignIn')
const props = defineProps({
    items: Array
})
const breakpoints = useBreakpoints({
    laptop: 1024
})
const screenLaptop = breakpoints.smallerOrEqual('laptop')
const isVisible = ref(false)
const setIsVisible = () => {
    isVisible.value = isVisible.value ? false : true;
};

watch(
    () => screenLaptop.value,
    (value) => {
        const body = document.body
        if (!value) {
            body.classList.add('no-overflow')
        } else {
            body.classList.remove('no-overflow')
        }
    }
)
</script>

<style lang="scss" scoped>
.container {
    padding-left: 33px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-right: 40px;
    border-radius: 0px 0px 15px 15px;
    background: linear-gradient(90deg, #212429 1.54%, #191D20 100.86%);
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
    z-index: 10000;
    }
    
    .logo {
    width: 210px;
    height: 47px;
    }
    
    .infoBlock {
    display: flex;
    gap: 150px;
    }
    
    .navigation {
    display: flex;
    gap: 20px;
    align-items: center;
    }
    
    .navText {
        cursor: pointer;
    }
    
    .navText:hover {
        color: #FE8349; 
    }
    
    .activeNav {
        color: #FE8349; 
    }
    
    .buttonsBlock {
        display: flex;
        @include toRem(gap, 10);
        align-items: center;
        justify-content: center;
    }
    
    @media (max-width: 1024px) {
    .container {
    padding-left: 30px;
    padding-right: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1000;
    }
    
    .menuBar {
        width: 29px;
        height: 16px;
        cursor: pointer;
        display: block;
    }
    
    .infoBlock {
    display: none;
    }
    
    .infoBlockMobile {
    position: fixed;
    background: linear-gradient(180deg, #1A1C1E 0%, #191A1C 100%);
    left: 0;
    top: 0;
    padding-top: calc(50vh - (262px / 2));
    height: 100vh;
    width: 100%;
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    }
    
    .navigation {
    flex-direction: column;
    gap: 5px;
    }
    
    .logo {
    width: 112px;
    height: 25px; 
    }
    
    .v-btnsBlock {
    flex-direction: column;
    }
    }
    
    @media (max-width: 1480px) {
        .navText {
        white-space: nowrap;
        }
    
        .infoBlock {
        gap: 20px;
        }
    }
</style>