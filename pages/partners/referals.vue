<template>
    <div class="flex flex-col gap-5">
        <div class="partners-block">
            <div class="partners-header">
                <h1>Партнерам</h1>
                <div class="partners-tab-wrapper">
                    <NuxtLink v-for="(tab, i) in tabs" :key="i" :to="tab.link">
                        <b-button 
                        :class="$route.fullPath === tab.link? 'active' : ''"
                        type="Tab"
                        size="S" 
                        :text="tab.title"> {{ tab.title }} </b-button>
                    </NuxtLink>
                </div>
            </div>
            <div class="partners-card-wrapper">
                <div class="partners-card" v-for="card in cards" :key="card.num">
                    <h1 class="text-white font-semibold text-2xl">{{ card.num }}</h1>
                    <h3 class="text-white font-semibold text-base">{{ card.title }}</h3>
                    <span class="text-white font-normal">{{ card.desc }}</span>
                </div>
            </div>
        </div>
        <div class="partners-block">
            <div class="partners-header">
                <h1>Накопительная система кэшбек на обмен</h1>
            </div>
            <div class="partners-progress">
                <Progress value="0.5" percent="1"/>
                <Progress value="0.6" percent="0.6"/>
                <Progress value="0.7" percent="0"/>
            </div>
        </div>
    </div>
</template>

<script setup>

const cards = [
    {num: '01', title: 'Регистрация', desc: 'Зарегистрируйтесь на сайте'},
    {num: '02', title: 'Совершите обмен', desc: 'По любому актуальному направлению'},
    {num: '03', title: 'Получите кешбек', desc: 'Сумма кэшбека зависит от суммы обмена'},
]
const tabs = [
    {link: '/lk/referal', title: 'Реферальная программа'},
    {link: '/partners/cashback', title: 'Кешбэк'},
    {link: '/partners/monitoring', title: 'Мониторингам'},
]

console.log(useRoute());
</script>

<style lang="scss">
    .partners-block{
        background: linear-gradient(to bottom, $col-secondary-1, $col-secondary-2);
        @include toRem(height, 360);
        @include toRem(padding, 20);
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        @include toRem(border-radius, 15);
        @include shadow(0, 0, 38.5px, 0, #000000, 0.3)
    }
    .partners-header{
        display: flex;
        justify-content: space-between;
        &>h1{
            @include toRem(font-size, 24);
        }
    }
    .partners-tab-wrapper{
        display: flex;
        @include toRem(gap, 10)
    }
    .partners-card-wrapper{
        display: flex;
        position: relative;
        flex-direction: row;
        @include toRem(gap,30);
        margin: auto;
    }
    .partners-card{
        display: block;
        background: linear-gradient(45deg, $col-tertiary-1, $col-tertiary-2);
        border: solid $col-transparent-white 1px;
        @include toRem(border-radius, 15);
        @include toRem2Values(padding, 20, 10);
        @include toRem(width, 278);
        @include toRem(max-height, 174);
        >*{
            margin: 2.5px;
        }
    }
    .partners-progress{
        display: flex;
        flex-direction: column;
        @include toRem(gap, 10);
        max-width: 894px;
        width: 100%;
        align-self: center;
        margin-top: 2.5rem;
    }
</style>