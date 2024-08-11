<template>
  <button
    :class="`bButton size${size} type${type}`"
  >
    <img v-if="prependIcon" :src="getSvgUrl(prependIcon)" :class="['icon', centerIcon ? 'iconCenter': '']" alt="icon" />
    <span>{{ text }}</span>
</button>
</template>

<script setup lang="ts">
interface ButtonProps {
  prependIcon?: string
  text: string
  size: "XS" | "S" | "M" | "L" | "Z" | "XZ" | "2XL" | "FULL"
  type: "Primary" | "Secondary" | "Link" | "Tertiary" | 'Tab' | 'TabSecondary'
  centerIcon?:  boolean

}
const props = defineProps<ButtonProps>()
</script>
<style lang="css">
.bButton{
  transition: .2s;
}
.bButton.disabled{
  @apply grayscale select-none pointer-events-none
}
</style>
<style lang="scss" scoped>
.container {
    box-shadow: 0px 4px 13.1px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-weight: 700;
    display: flex;
  justify-content: center;
}
.sizeS {
padding: 10px 10px 10px 10px;
font-size: 16px;
}

.sizeM {
padding-left: 35px;
padding-right: 35px;
padding-top: 13px;
padding-bottom: 13px;
font-size: 24px;
}

.sizeL {
padding-left: 28px;
padding-right: 28px;
padding-top: 28px;
padding-bottom: 28px;
font-size: 24px;
}

.radius {
border-radius: 15px !important;
}
.sizeXS{
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
}
.sizeZ {
padding-left: 82px;
padding-right: 82px;
padding-top: 5px;
padding-bottom: 5px;
}

.sizeXZ {
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
}
.size2XL{
  @include toRem(padding, 20);
  width: 100%;
  @include toRem(border-radius, 15);
}

.sizeFULL{
  @apply w-full h-full p-5
}
.typeTabSecondary{
   background: $col-tab-secondary;
   @include shadow(0, 14px, 12.5px, 0, black, .25);
   text-wrap: nowrap;
  &.active{
    background: linear-gradient(92deg, $col-accent-start -28.93%, $col-accent 69.52%, $col-accent-start 178.79%);
  }
  &:hover:not(.active){
    filter: brightness(1.1);
  }
}
.typePrimary {
    background: linear-gradient(92deg, #F94F2B -28.93%, #FE8349 69.52%, #EF4E32 178.79%);
    border-radius: 10px;
}

.typeLink {
background: transparent;
border: none;
box-shadow: none;
}

.typeLink:hover {
color: #F94F2B;
}

.typePrimary:hover{
  filter: hue-rotate(-20deg);
  box-shadow: 0 0 7px 2px #F94F2B;
}

.typeSecondary {
display: flex;
gap: 10px;
background-color: white;
color: black;
align-items: center;
border-radius: 15px;
}

.typeTertiary {
border-radius: 15px;
border: 1px solid #101214;
background: linear-gradient(93deg, #272A2F 0%, #191D24 99.77%) !important;
color: #FFFCEA;
}

.icon {
    width: 28px;
    height: 28px;
    }

.iconCenter {
  margin: 0 auto;
}
@media (hover: hover) {
  .typeSecondary:hover {
    transform: scale(1.05)
  }
}
</style>