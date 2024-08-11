<template>
  <div class="container-23456">
    <div class="titleBlock">
      <div class="flexTitle">
        <span class="title">Наши победители</span>
        <img :src="getSvgUrl('arrowToTopRight')" class="titleIcon" alt="icon1" />
      </div>
    </div>
      <swiper
      wrapper-class="scrollBlock"
      :modules="[SwiperAutoplay]"
      :slides-per-view="1.8"
      :grab-cursor="true"
      :space-between="25"
      :allow-slide-prev="true"
      :loop="true"
      :centeredSlides="true"
      :autoplay="{
          delay:4000,
          disableOnInteraction: false
      }">
      <swiper-slide v-for="(el, index) in winners" :key="index">
        <div  class="winnerBlock">
          <div class="upperBlock">
            <div class="numberBlock">
              <img :src="getSvgUrl('likeIcon')" class="heartIcon" alt="heart" />
              <span>Розыгрыш №{{ el.number }}</span>
            </div>
            <span>{{ el.date }}</span>
          </div>
          <span class="reward">{{ formattedRew(10000) }}&nbsp;₽</span>
          <span class="email">{{ el.email }}</span>
        </div>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script setup>
import { getSvgUrl } from '~/composables/imageURL'
const winners = [
  {
        email: 'na***@gmail.com',
        date: '20.04.2023',
        number: '0025',
        reward: 10000
    },
    {
        email: 'na***@gmail.com',
        date: '20.04.2023',
        number: '0025',
        reward: 10000
    },
    {
        email: 'na***@gmail.com',
        date: '20.04.2023',
        number: '0025',
        reward: 10000
    },
    {
        email: 'na***@gmail.com',
        date: '20.04.2023',
        number: '0025',
        reward: 10000
    },
    {
        email: 'na***@gmail.com',
        date: '20.04.2023',
        number: '0025',
        reward: 10000
    },
    {
        email: 'na***@gmail.com',
        date: '20.04.2023',
        number: '0025',
        reward: 10000
    },
]

const formattedRew = (reward) => reward.toLocaleString()
</script>

<style scoped lang="scss">
.container-23456 {
  @apply flex relative w-full gap-3
}
.swiper{
  @apply border border-white border-opacity-10 rounded-2xl p-2
}

.titleBlock {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #101214;
  background: linear-gradient(93deg, #272a2f 0%, #191d24 99.77%);
  width: 453px;
}

.flexTitle {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.titleIcon {
  width: 17px;
  height: 13px;
  transform: rotate(45deg);
}

.title {
  font-size: 24px;
  font-weight: 600;
}

.scrollBlock {
  width: 1377px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: #fff rgba(255, 255, 255, 0.1);
}


.winnerBlock {
  border-radius: 15px;
  background: linear-gradient(67deg, #fb7844 -6.44%, #4f545a 78.32%);
  box-shadow: 0px 4px 8.9px 0px rgba(0, 0, 0, 0.25);
  padding-bottom: 60px;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 29px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-basis: 587px;
  flex-grow: 0;
  flex-shrink: 0;
}

.upperBlock {
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.numberBlock {
  display: flex;
  gap: 10px;
  align-items: center;
}

.heartIcon {
  width: 1rem;
  height: 1rem;
}

@media (max-width: 428px) {
  .titleBlock {
    min-width: 90%;
  }

  .container {
    overflow-x: scroll;
    scroll-behavior: smooth;
  }
}

@media (max-width: 1480px) {
  .title {
    font-size: 22px;
  }
}

</style>