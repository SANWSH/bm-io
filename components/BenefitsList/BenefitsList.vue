<template>
    <div :class="`
      wrapper
    `">
      <benefits-item
        v-for="(item, index) in benefits"
        :key="index"
        :id="(index + 1)"
        :image="item.image"
        :title="item.title"
        :text="item.text"
        :href="item.href"
        :isActive="$route.path === item.href"
        :class="
          `index${index + 1}
          ${type === 'Secondary' && 'secondaryItem' ||
          type === 'Tertiary' && 'tertiaryItem'}
        `"
      />
    </div>
  </template>
  
  <script setup lang="ts"> 
  import { benefits } from './benefits'
  import BenefitsItem from './BenefitsItem.vue';
  interface BenefitsListProps {
    items: any[]
    type: 'Primary' | 'Secondary' | 'Tertiary'
  }

  const props = defineProps<BenefitsListProps>()
  const route = useRoute()
  
  </script>

  <style lang="scss" scoped >
  .wrapper {
    border-radius: 15px;
    background: linear-gradient(180deg, #22252A 0%, #191B20 100%);
    box-shadow: 0px 11px 38.5px 0px rgba(0, 0, 0, 0.40);
    display: flex;
    gap: 11px;
    padding: 10px 10px 10px 10px;
    height: 400px; 
    }
    .wrapper.selected{
      overflow-x: auto;
      min-width: 100%;
    }
    @media (max-width: 428px) {
    .wrapper {
    gap: 0px;
    height: 100%;
    }
    
    .secondary {
    flex-direction: row;
    overflow-x: scroll;
    gap: 10px;
    }
    
    .tertiary {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 60px;
    }
    
    .index2 {
    margin-top: -20px;
    }
    
    .index3 {
    margin-top: -20px;
    }
    
    .index4 {
    margin-top: -20px;
    }
    
    .secondaryItem {
    margin-top: 0px;
    min-width: fit-content;
    }
    
    .tertiaryItem {
    margin-top: 0px;
    height: 199px;
    }
    }
    
    @media (max-width: 1480px) {
      .wrapper {
      height: 305px;
      }
    }

    .wrapper.selected{
      &>.index1,.index2,.index3,.index4{
        margin-top: 0px;
        min-width: 300px;
        min-height: 267px; 
        &:hover{
          transform: none;
        }  
      }
    }
  </style>