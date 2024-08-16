<template>
    <NuxtLink :class="`group benefit-card ${$route.path !== '/' ? 'Secondary' : 'Primary'}`" :to="href"
        :style="`background: url('${getImageUrl('benefitImg' + id)}') center no-repeat; background-size: cover;`">
        <div class="infoBlock">
            <div
                :class="type === 'Secondary' && isActive ? 'activeTitleBlock' : type === 'Tertiary' ? 'activeTitleBlock' : 'titleBlock'">
                <span class="title">{{ title }}</span>
                <img v-if="!isActive" :src="getImageUrl('secured')"
                    class="icon group-hover:scale-125 transition-transform" alt="icon">
            </div>
            <span>{{ text }}</span>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { getImageUrl } from '../../composables/imageURL';

interface BenefitsItemProps {
    id: number
    image: string
    title: string
    text: string
    type: 'Primary' | 'Secondary' | 'Tertiary'
    isActive: boolean
    href: string
}
defineProps<BenefitsItemProps>()
</script>

<style lang="scss">
.benefit-card {
    aspect-ratio: 136/138;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    max-width: 25%;
    background-position: center;
    flex: 1;
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid#EB6B43;
}
</style>
<style lang='scss' scoped>
.Primary {
    @apply border-none
}

.Secondary:not(.router-link-active) {
    @apply grayscale border-none order-1
}

.blackWhite {
    filter: grayscale(100%);
}


.blackWhite:hover {
    filter: grayscale(0%);
    transition: 1s;
}

.border {
    border: 1px solid #EB6B43;
}

.infoBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-self: flex-start;
}

.titleBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.activeTitleBlock {
    display: flex;
    justify-content: flex-start;
}

.icon {
    width: 12px;
    height: 12px;
}

.title {
    font-size: 24px;
    font-weight: 600;
}

@media (max-width: 428px) {
    .wrapper {
        position: relative;
        max-width: 100%;
        height: 267px;
        flex: auto;
    }
}

@media (max-width: 1480px) {
    .title {
        font-size: 19px;
    }
}
</style>