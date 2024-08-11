<template>
    <div class="w-64 h-64 relative m-auto">
        <misc-spinner/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


const cards = [
    {num: '01', title: 'Регистрация', desc: 'Зарегистрируйтесь на сайте'},
    {num: '02', title: 'Совершите обмен', desc: 'По любому актуальному направлению'},
    {num: '03', title: 'Получите кешбек', desc: 'Сумма кэшбека зависит от суммы обмена'},
]
const tabs = [
    {link: '/referals', title: 'Реферальная программа'},
    {link: '/cashback', title: 'Кешбэк'},
    {link: '/monitoring', title: 'Мониторингам'},
]
const router = useRouter()
const route = useRoute()
onMounted(() => {
    router.push(route.path + '/cashback')
})

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
</style>