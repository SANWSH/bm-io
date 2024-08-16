<script setup>
import { benefits } from '~/components/BenefitsList/benefits';
import { getImageUrl } from '~/composables/imageURL';
import { useCurrencyStore } from '../store/exchanger.store';
import { computed, onMounted, watch } from 'vue';

const store = useCurrencyStore()

watch(
    () => store.selectedGiveItem.id,
    () => {
        store.changeOperationsList()
        store.getString = store.selectedGetItem.course
    }
)
const windowWidth = ref(0)

watch(
    () => store.selectedGetItem.id,
    () => {
        store.details.getResult()
    }
)

onMounted(() => {
    windowWidth.value = computed(() => window.innerWidth )
    window.addEventListener('resize', () => {
        windowWidth.value = computed(() => window.innerWidth )
    }) 
})



</script>
<template>
    <exchange-list/>
    <div v-show="windowWidth.value <= 1025" class="p-5 banner-article flex flex-col gap-3">
                <h1 class="title-2">Bitmafia official</h1>
                <span>Если у Вас возникли вопросы или проблемы, пожалуйста - обратитесь в наш Telegram канал.</span>
    </div>
    <p>{{ store.details.getResult() }}</p>
    <div class="banner flex items-center relative" :style="`background: url('${getImageUrl('tgBanner')}') left no-repeat`">
        <div class="banner-info-wrapper">
            <article v-if="windowWidth.value > 1025" class="banner-article flex flex-col gap-3">
                <h1 class="title-2">Bitmafia official</h1>
                <span>Если у Вас возникли вопросы или проблемы, пожалуйста - обратитесь в наш Telegram канал.</span>
            </article>
            <b-button 
            prepend-icon="telegram"
            text="Перейти"
            type="Secondary"
            size="S"/>
        </div>
    </div>

    <benefits-list :items="benefits" type="Primary"/>
    <img v-for="item in benefits" :key="item.title" :src="getImageUrl(item.image)" alt="">

    <div class="exchange-info">
        <trades-reserve/>
        <trades-last-exchanges/>
        <trades-popular/>

        <!-- SWIPER -->
        <div class="swiper-clip-wrapper overflow-clip rounded-2xl w-full basis-10">
            <swiper
                ref="swiperEl"
                wrapper-class="swiper-container"
                :modules="[SwiperAutoplay]"
                :slides-per-view="1.2"
                :grab-cursor="true"
                :space-between="25"
                :allow-slide-prev="true"
                :loop="true"
                :centered-slides="true"
                :autoplay="{
                    delay:4000,
                    disableOnInteraction: false
                }">
                <swiper-slide v-for="slider in 10" :key="slider">
                    <article class="block p-5 rounded-2xl relative bg-gradient-to-tr from-orange-400 to-slate-600" >
                        <div class="card-header">
                            <div class="inline-flex">
                                <img src="../assets/svg/likeIcon.svg" alt="">
                                <span class="text-sm font-normal"> Отзыв </span>
                            </div>
                            <span class="text-sm font-normal"> 2 часа назад </span>
                        </div>
                        <h1 class="title-2">Alex Zub</h1>
                        <span>Самый быстрый и беспроблемный обменник. Пользуюсь каждый раз, и вообще всегда все проходит как нужно. Советую!</span>
                    </article>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <list class="mb-8"/>
</template>

<style lang="scss">
/* banner styles */

.exchange-info{
    @apply flex gap-3 justify-between
}
.trade-info{
    @apply p-2 gap-2 flex flex-col w-full;
    @media screen and (max-width:1024px) {
        flex-basis: auto!important;
    }
}
.banner {
    @apply justify-end pr-40 h-44 rounded-2xl gap-[20vw] overflow-clip;
    &::before{
        content: '';
        position: absolute;
        background-image: radial-gradient($col-accent 0%, transparent 70%);
        width: 30%;
        height: 200%;
        left: -1rem;
        scale: 1.5;
        animation: infinite glowing 8s;
        z-index: -1;
        background-size: contain;
    }
    @media screen and (max-width:1664px) {
        @apply gap-[10vw]
    }
    @media screen and (max-width:1447px) {
        @apply gap-[2vw] pr-10
    }
    @media screen and (max-width: 1025px) {
        @apply pr-0 justify-center w-full
    }
}
.banner-info-wrapper{
    @apply flex w-[50%] items-center justify-between;
    &>.bButton {
        @apply font-bold h-max;
        @media screen and (max-width: 1025px) {
            @apply mx-auto
        }
    }
}
.banner-article{
    @apply max-w-[calc(452rem/16)]
}

/* swiper styles */
.swiper-clip-wrapper {
    @apply py-9 border border-white border-opacity-20
}

.card-header{
    @apply flex justify-between mb-4 text-white text-opacity-50
}
.swiper-frame{
    @apply bg-gradient-to-b from-[#22252A] to-[#191B20] rounded-2xl h-full w-max
}
</style>
