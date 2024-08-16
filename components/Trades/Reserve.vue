<template>
    <div class="trade-info basis-60 h-max drop-shadow-base">
        <span class="text-white text-opacity-50 w-full">Резерв валют</span>
        <div class="flex rounded-2xl relative w-full">
            <div class="flex flex-col gap-3 w-full">
                <div v-for="items in 2" :key="items"
                    class="max-h-[50px] !w-full p-[1.725rem_.725rem] rounded-2xl flex gap-3 items-center bg-gradient-to-br from-[#2A2D34] to-[#4F545A]">
                    <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="" class="currency-icon active">
                    <div class="flex flex-col">
                        <span class="text-base font-normal">Bitcoin BTC</span>
                        <span class="text-base font-semibold">{{ Math.floor(Math.random() * 5000) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <b-button prepend-icon="arrowDropdown" type="link" size="s" center-icon />
    </div>
</template>

<script setup>
import { getSvgUrl } from '../../composables/imageURL';
</script>