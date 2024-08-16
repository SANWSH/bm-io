<template>
  <div :class="[$style.container, $style.flex3]">
    <div :class="[$style.absolute, isVisible ? $style.height : '']">
      <span :class="$style.greyTitle">Популярные обмены</span>
      <div :class="[$style.listBlock, !isVisible ? $style.noActiveList : '']">
        <div v-for="(el, index) in popular" :key="index" :class="$style.popularGreyBlock">
          <div :class="$style.popularFlexBlock">
            <div :class="$style.flexBlock">
              <div :class="$style.redIcon">
                <img :src="btcIcon" alt="icon">
              </div>
              <span>{{ el.title1 }}</span>
            </div>
            <div :class="$style.dividerBlock">
              <div :class="[$style.divider, $style.dividerWidth]" />
              <img :src="changeIcon" alt="change">
              <div :class="[$style.divider, $style.dividerWidth]" />
            </div>
            <div :class="$style.flexBlock">
              <div :class="$style.greyIcon">
                <img :src="btcDark" alt="icon">
              </div>
              <span>{{ el.title2 }}</span>
            </div>
          </div>
          <div :class="$style.linkBlock">
            <div :class="$style.link">
              <img :src="link" alt="link" :class="$style.linkIcon">
            </div>
          </div>
        </div>
      </div>
      <div :class="[$style.closeBlock, isVisible ? $style.padding : '']" @click="isVisible = !isVisible">
        <img :src="isVisible ? toClose : toOpen" alt="close">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import btcIcon from '../assets/btcIcon.svg'
import btcDark from '../assets/btcIconDark.svg'
import changeIcon from '../assets/changeIcon (2).svg'
import link from '../assets/link.svg'
import toOpen from '../assets/toOpen.svg'
import toClose from '../assets/toClose.svg'

const popular = ref([
  // your popular data here
  { title1: 'Bitcoin BTC', title2: 'Bitcoin BTC' },
  { title1: 'Ethereum ETH', title2: 'Ethereum ETH' },
  // ...
])

const isVisible = ref(false)
</script>

<style lang="scss" scoped>
.wrapper {
  font-weight: 400;
  font-size: 16px;
  color: white;
  position: relative;
}

.absolute {
  position: absolute;
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  background: linear-gradient(180deg, #22252a 0%, #191b20 100%);
  box-shadow: 0px 11px 38.5px 0px rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.icon {
  width: 50px;
}

.height {
  height: auto;
}

.flex2 {
  flex: 1;
}

.flex3 {
  flex: 2;
}

.padding {
  padding-bottom: 29px;
}

.noActiveList {
  height: 178px !important;
  margin-bottom: 0px !important;
}

.greyTitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
}

.listBlock {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  height: 100%;
}

.greyBlock {
  border-radius: 15px;
  background: linear-gradient(91deg, #2a2d34 5.56%, #4f545a 104.85%);
  padding-top: 13px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 172px;
}

.lastChangesDivider {
  background-color: rgba(255, 255, 255, 0.10);
  height: 1px;
}

.reservGreyBlock {
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  gap: 26px;
  border-radius: 15px;
  background: linear-gradient(91deg, #2a2d34 5.56%, #4f545a 104.85%);
  height: 81px;
  padding-bottom: 15px;
  padding-top: 15px;
}

.popularGreyBlock {
  border-radius: 15px;
  background: linear-gradient(91deg, #2a2d34 5.56%, #4f545a 104.85%);
  padding-top: 19px;
  padding-bottom: 19px;
  padding-left: 10px;
  padding-right: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 172px;
}

.linkIcon {
  cursor: pointer;
}

.popularFlexBlock {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.dividerBlock {
  display: flex;
  gap: 10px;
  align-items: center;
}

.linkBlock {
  padding: 6px 6px 6px 6px;
  border-radius: 15px;
  border: 1px solid #2b3034;
  box-shadow: 2px 2px 7.7px 0px rgba(0, 0, 0, 0.47);
  width: 82px;
  height: 82px;
}

.link {
  border-radius: 15px;
  background: linear-gradient(135deg, #2e3337 0%, #1d2025 100%);
  box-shadow: 2px 2px 7.7px 0px rgba(0, 0, 0, 0.47);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}

.flexBlock {
  display: flex;
  gap: 26px;
  align-items: center;
  padding-right: 60px;
}

.iconsBlock {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

.redIcon {
  border-radius: 15px;
  background: linear-gradient(135deg, #eb6b43 0%, #d2243d 100%);
  box-shadow: 2px 4px 8.6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.greyIcon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #7f8385 0%, #a5a9aa 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.infoBlock {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.btcBlock {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 15px;
}

.divider {
  background-color: rgba(255, 255, 255, 0.1);
  height: 1px;
  width: 100%;
}

.closeBlock {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

@media (max-width: 1480px) {
  .wrapper {
    height: 252px;
  }
}
</style>