<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-button" :class="isOpen? 'open': ''">
      <input type="text" disabled :value="selectedOption" placeholder="Выберите банк">
      <img :src="getSvgUrl('arrowDropdown')" alt="" width="32" class="brightness-[5] opacity-60">
    </button>
    <transition name="dropdown">
      <div v-if="isOpen" class="dropdown-content">
        <button
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="dropdown-option"
        >
          {{ option }}
        </button>
      </div>
    </transition>
  </div>
</template>



<script setup>
import { ref } from 'vue';

defineProps({
  options: {
    type: Array,
    required: true
  }
})

const isOpen = ref(false);
const selectedOption = ref('');
const options = ['Option 1', 'Option 2', 'Option 3'];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
};
</script>

<style scoped lang="scss">
.dropdown, .dropdown>button {
  position: relative;
  width: 100%;
}

.dropdown-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(69deg, $col-tab-secondary, $col-cards-2);
  border: none;
  padding: 10px;
  cursor: pointer;
  @include toRem2Values(padding, 23, 20);
  @include toRem(border-radius, 15);
  &>input{
    background: transparent;
    pointer-events: none;
  }
}
.dropdown-button.open{
  border-end-start-radius: 0px;
  border-end-end-radius: 0px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: linear-gradient(69deg, $col-tab-secondary 28%, $col-cards-2);
  min-width: 100%;
  @include toRem(border-bottom-left-radius, 15);
  @include toRem(border-bottom-right-radius, 15);
  overflow: hidden;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: ease .3 all;
}

.dropdown-content>button {
  display: block;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  cursor: pointer;
}

.dropdown-content button:hover {
  background-color: #f1f1f11a;
}

.dropdown .dropdown-content {
  display: block;
}

</style>