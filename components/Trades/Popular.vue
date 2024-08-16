<template>
    <div class="trade-info basis-96 h-max drop-shadow-base">
        <span class="text-white text-opacity-50">Популярные обмены</span>
        <div class="flex p-5 rounded-2xl relative bg-gradient-to-br from-[#2A2D34] to-[#4F545A]">
            <div class="flex flex-col">
                <div class="max-h-[50px] flex gap-3 items-center">
                    <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="" class="currency-icon active">
                    <div class="currency-title"> {{ Math.floor(Math.random() * 500) +
                        Math.random().toFixed(Math.floor(Math.random() * 6)) }} BTC</div>
                </div>
                <div class="divider flex items-center">
                    <div class="h-[1px] w-full bg-white bg-opacity-20" />
                    <img :src="getSvgUrl('exchangeTradeTo')" alt="" class="mx-2">
                    <div class="h-[1px] w-full bg-white bg-opacity-20" />
                </div>
                <div class="flex max-h-[50px] flex gap-3 items-center">
                    <img :src="getSvgUrl('Bitcoin_thumbnail')" alt="" class="currency-icon">
                    <div class="currency-title"> {{ Math.floor((Math.random() * 500).toFixed(8)) }} BTC</div>
                </div>
            </div>
            <div
                class="frame h-max flex relative self-center p-1 items-center border-white border-opacity-20 border rounded-2xl ml-auto">
                <b-button type="Tertiary" size="FULL" prepend-icon="arrowToTopRight" />
            </div>
        </div>
        <b-button prepend-icon="arrowDropdown" type="link" size="s" center-icon />
    </div>
</template>

<script setup>
import { getSvgUrl } from '../../composables/imageURL';
</script>