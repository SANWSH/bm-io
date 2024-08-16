<script setup>
import { useElementSize } from '@vueuse/core'
import { getSvgUrl } from '../../composables/imageURL';

const dropdown = ref(null)
const dropdownWrapper = ref(null)
const { height } = useElementSize(dropdown)

function open() {
    dropdownWrapper.value.classList.toggle('open')
    dropdown.value.classList.toggle('open')
}

const cards = [
    { title: 'Ответим на любые вопросы', img: 'back1Type2' },
    { title: 'Ответ в кратчайшие сроки', img: 'back2Type2' },
    { title: 'Окажем качественную помощь', img: 'back3Type2' },
    { title: 'Только компетентные специалисты', img: 'back4Type2' },
]

</script>
<template>
    <div class="contacts-page">
        <div class="contacts-header">
            <div class="contacts-header-media">
                <div class="contacts-header-media-item">
                    <h1 class="font-semibold text-2xl">
                        Техническая поддержка
                    </h1>
                    <div class="media">
                        <NuxtLink to="//telegram.web" class="media-link">
                            <img :src="getSvgUrl('telegram')">
                            <span>Перейти в Telegram</span>
                        </NuxtLink>
                        <NuxtLink to="mailto:bitmafia@support.ru" class="media-link">
                            <img :src="getSvgUrl('mail')">
                            <span>bitmafia@support.ru</span>
                        </NuxtLink>
                        <div class="media-info">
                            <span>Время работы 00:00-23:59</span>
                        </div>
                    </div>
                </div>
                <div class="contacts-header-media-item">
                    <div ref="dropdownWrapper" class="media-dropdown-wrapper">
                        <h1 class="font-semibold text-2xl">
                            Форумы
                        </h1>
                        <div class="media dropdown">
                            <div ref="dropdown" class="media-dropdown-content">
                                <NuxtLink to="//telegram.web" class="media-link">
                                    <img :src="getSvgUrl('globalMedia')">
                                    <span>Bits Media</span>
                                </NuxtLink>
                                <NuxtLink to="mailto:bitmafia@support.ru" class="media-link">
                                    <img :src="getSvgUrl('globalMedia')">
                                    <span>Bits Media</span>
                                </NuxtLink>
                                <NuxtLink to="mailto:bitmafia@support.ru" class="media-link">
                                    <img :src="getSvgUrl('globalMedia')">
                                    <span>Bits Media</span>
                                </NuxtLink>
                                <NuxtLink to="mailto:bitmafia@support.ru" class="media-link">
                                    <img :src="getSvgUrl('globalMedia')">
                                    <span>Bits Media</span>
                                </NuxtLink>
                                <NuxtLink to="mailto:bitmafia@support.ru" class="media-link">
                                    <img :src="getSvgUrl('globalMedia')">
                                    <span>Bits Media</span>
                                </NuxtLink>
                            </div>
                            <div class="media-dropdown" @click="open()">
                                <img :src="getSvgUrl('arrowDropdown')" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contacts-cards-container">
            <div v-for="card in cards" :key="card.title" class="contacts-card"
                :style="`background-image: url(${getImageUrl(card.img)})`">
                <h1 class="contacts-card-title">
                    {{ card.title }}
                </h1>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.contacts {
    &-cards-container {
        display: flex;
        width: 100%;
        background-image: linear-gradient(to bottom, $col-exchange-1, $col-exchange-2);
        gap: 0.75rem;
        @include toRem(border-radius, 15);
        @include toRem(padding, 10);
        height: max-content;

    }

    &-card {
        aspect-ratio: 447/380;
        background-size: cover;
        width: calc(25% - 10px);
        @include toRem(border-radius, 15);
        @include toRem(padding, 20);
        font-size: 24px;
        font-weight: 600;
    }

    // &-page{

    // }
    &-header {
        width: 100%;
    }

    &-header-media {
        display: flex;
        width: 100%;
        @include toRem(gap, 10);
    }

    &-header-media-item {
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 1.25rem;
        background-image: linear-gradient(to bottom, $col-exchange-1, $col-exchange-2);
        @include toRem(border-radius, 15);
        width: 100%;

        &:not(:nth-child(2)) {
            padding: 1.25rem;
        }
    }
}

/* media */
.media-link,
.media-info,
.media-dropdown {
    display: flex;
    @include toRem(border-radius, 15);
    @include toRem2Values(padding, 12.5, 20);
    font-weight: 700;
    align-items: center;
}

.media-link {
    color: $col-primary;
    background-color: white;
    @include toRem(gap, 15);
    transition: background-color .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        background-color: $col-accent;
    }
}

.media-info {
    background-image: linear-gradient(87deg, $col-tertiary-1, $col-tertiary-2);
    justify-content: center;
    border: solid $col-transparent-white 1px;
}

.media {
    display: flex;
    flex-direction: column;
    @include toRem(gap, 10)
}

.media-dropdown-content {
    height: math.div(((54+5) * 2), 1)+px;
    display: flex;
    flex-direction: column;
    gap: inherit;
    overflow: hidden;
    transition: all .2s ease;

    &.open {
        height: v-bind(height)
    }
}

.media-dropdown {
    justify-content: center;
    background-image: linear-gradient(87deg, $col-tertiary-1, $col-tertiary-2);
    @include toRem2Values(padding, 20, 22.5);
    cursor: pointer;
    transition: filter .2s ease;

    &:hover {
        filter: brightness(1.25);
    }
}

.media-dropdown-wrapper {
    display: flex;
    flex-direction: column;
    gap: inherit;
    position: absolute;
    width: 100%;
    padding: 1.25rem;
    bottom: 0;
    top: 0;

    &.open {
        bottom: v-bind(height);
        background-image: linear-gradient(to bottom, $col-exchange-1, $col-exchange-2);
        @include toRem(border-radius, 15)
    }

    &.open>.dropdown>.media-dropdown>img {
        transform: rotateZ(180deg);
    }
}

@media screen and (max-width:1025px) {
    .contacts {
        &-header-media {
            display: flex;
            flex-direction: column;
        }

        &-header-media-item {
            min-height: 271px;
        }

        &-cards-container {
            flex-direction: column;
        }

        &-card {
            width: 100%;
        }
    }
}
</style>