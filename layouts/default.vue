<template>
    <div class="layout-wrapper">
        <Header :items="NAV_ITEMS"/>
        <main class="flex flex-col gap-5">
            <NuxtPage/>
        </main>
        <Footer :items="NAV_ITEMS"/>
    </div>
</template>

<script setup>
import { NAV_ITEMS } from "~/components/navMenu";
import { useGlobalStore } from "../store/global.store";

const global = useGlobalStore()
watch(
    () => global.isModalOpen,
    () => {
        if (global.isModalOpen) {
            document.body.classList = 'blocked'
        } else {
            document.body.classList = ''
        }
    } 
)
</script>

<style lang="scss">
    .preloader {
        @apply block fixed h-full w-full inset-0 backdrop-blur-xl bg-black z-50
    }
    .layout-wrapper{ 
        @apply max-w-[1840px] mx-auto relative ;
        min-height: 100vh;
    }
    main{
        box-sizing: border-box;
        position: relative;
        height: 100%;
        min-height: calc(100vh - 302px);
    }
    @media screen and (max-width: 1025px) {
        main{
            padding-top: 80px
        }
    }
</style>
