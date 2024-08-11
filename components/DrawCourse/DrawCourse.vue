<template>
  <div class="container">
    <div class="benefit-info-hero-background" :style="{ backgroundImage: `url(${getImageUrl('drawCourseImg')})` }">
      <img :src="getImageUrl('drawImgLayer2')" alt="benefit-info-hero-foreground" class="benefit-info-hero-foreground" />
    </div>
    <div class="benefit-info-content-prize-wrapper">
      <div class="benefit-info-content-prize">
        <!-- TODO: make prize-item component and use here -->
        <div class="prize-item-wrapper" :style="{ backgroundImage: `url(${getImageUrl('drawItemBack1')})` }">
          <span class="prize-item-name">01</span>
          <span class="prize-item-desc">Сделать обмен на сервисе BITMAFIA с понедельника 00:00 по воскресенье 20:00.</span>
          <span class="prize-item-comment">Каждый обмен даёт право на получение одного билета для участия в розыгрыше.</span>
        </div>
        <div class="prize-item-wrapper" :style="{ backgroundImage: `url(${getImageUrl('drawItemBack2')})` }">
          <span class="prize-item-name">02</span>
          <span class="prize-item-desc">Написать отзыв о сервисе BITMAFIA на сайте <a href="https://www.bestchange.ru/" class="link">Bestchange.ru</a>, указав номер завершённого обмена.</span>
          <span class="prize-item-comment">Отзыв должен быть написан в течение недели, с понедельника 00:00 по пятницу 20:00, чтобы быть учтённым при розыгрыше.</span>
        </div>
        <div class="prize-item-wrapper linkBlock" :style="{ backgroundImage: `url(${getImageUrl('drawItemVBack3')})` }">
          <div class="textBlock">
            <span class="prize-item-name">03</span>
            <span class="prize-item-desc">Подписаться на наш телеграм канал <a href="https://t.me/news24bitbank"><u>https://t.me/bitmafia.</u></a></span>
            <span class="prize-item-comment">Подтвердить участие на данной странице, используя соответствующую форму.</span>
          </div>
          <div class="tgButtonBlock">
            <a href="https://t.me/bitmafia_bot"><b-button type="Secondary" size="XZ" text="Перейти"/></a>
          </div>
        </div>
      </div>
      <misc-b-frame px="20" py="15" isPx>
        <b-button size="FULL" type="Primary" text="Участвовать"></b-button>
      </misc-b-frame>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
  .container {
display: flex;
gap: 10px;
padding: 10px 10px 10px 10px;
border-radius: 15px;
border: 1px solid #101214;
background: linear-gradient(93deg, #272A2F 0%, #191D24 99.77%);
font-style: normal;
line-height: normal; 
margin-top: 30px;
}

.imageBlock {
background-size: cover;
width: 751px;
height: 533px; 
position: relative;
border-radius: 15px;
flex: 2;
}

.layer2 {
width: 632px;
height: 524px; 
position:absolute;
top: -133px;
right: 15px;
}

.benefit-info-content-prize-wrapper {
display: flex;
flex-direction: column;
gap: 21px;
flex: 3;
}

.prize-item-wrapper {
display: flex;
flex-direction: column;
gap: 5px;
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 20px;
background-size: cover;
background-position: center;
flex: 1;
height: 423px;
border-radius: 15px;
}

.prize-item-name {
font-size: 24px;
font-weight: 600;
}

.prize-item-desc {
font-size: 16px;
font-weight: 600;
}

.prize-item-comment {
font-size: 16px;
font-weight: 400;
}

.benefit-info-content-prize {
display: flex;
gap: 10px;
}

.textBlock {
display: flex;
flex-direction: column;
gap: 5px;
}

.linkBlock {
display: flex;
flex-direction: column;
justify-content: space-between;
}

.tgButtonBlock {
display: flex;
justify-content: center;
}

.link {
color: #FE8349;
}

.buttonBlock {
padding-left: 20px;
padding-right: 20px;
padding-top: 15px;
padding-bottom: 15px;
border-radius: 15px;
border: 1px solid #101214;
background: linear-gradient(93deg, #272A2F 0%, #191D24 99.77%);
}
@media screen and (max-width:1025px) {
  .container{
    flex-direction: column;
    margin-top: 10vw;
  }
  .benefit-info{
    &-content-prize{
      aspect-ratio: 320/423;
      width: 100%;
      flex-direction: column;
    }
  }
  .benefit-info-hero-foreground{
    width: 100%;
  }
}
@media (max-width: 428px) {

.container {
flex-direction: column;
margin-top: 20px;
}
.imageBlock {
width: 100%;
height: 227px;
flex: auto;
}

.benefit-info-content-prize {
flex-direction: column;
}

.prize-item-wrapper {
flex: auto;
}

.layer2 {
    width: 70%;
    height: 90%;
    top: 50%;
    transform: translate(-52%,-71%);
    left: 52%;
}
}

@media (max-width: 1480px) {
.button {
font-size: 21px;
}

.imageBlock {
background-position: center;
}

.layer2 {
    width: 101%;
    height: 475px;
    position: absolute;
    top: -78px;
    right: -1px;
}

.benefit-info-content-prize-wrapper {
justify-content: space-between;
}

.prize-item-wrapper {
}
}
</style>