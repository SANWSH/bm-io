<script setup>
import { onMounted, ref } from 'vue';
import { useCurrencyStore } from '../../../store/exchanger.store';
import { currs } from './placeholder';

const store = useCurrencyStore()

const settingsTabs = [
  {
    name: "Основные",
    id: "general"
  },
  {
    name: "Мои кошелки",
    id: "accounts"
  }
]
const currentTab = ref(null)

const Userdata = reactive({
  Name: 'Username',
  Phone: '+79046192063',
  Telegram: '@TelegramUser',
  Email: 'user@example.com',
  Password: 'Password2',
  ConfirmPassword: 'Password2',
  CurrentPassword: 'Password1',
})

function SubmitForm() {
  console.log("Saved");
  
}

onMounted(() => {
  currentTab.value = settingsTabs[0].id
})
</script>

<template>
  <div class="settings-page">
    <AsidePanel/>
    <div class="settings-panel">
      <div class="settings-tabs">
        <b-button
        v-for="tab, i in settingsTabs"
        :key="i"
        type="Tab"
        :class="tab.id === currentTab? 'active' : '' "
        @click="currentTab = tab.id"
        :text="tab.name"/>
      </div>

      <div class="settings-content accounts" v-if="currentTab === 'accounts'">
        <exchange-list-wrapper class="settings-payments">
          <exchange-list-payments>
            <div class="exchange-body-currency-items" id="2">
            </div>
          </exchange-list-payments>
        </exchange-list-wrapper>
        <div class="settings-accounts drop-shadow-base">
          <h3 class="title-l">Кошельки</h3>
              <exchange-list-body-item 
              v-for="curr in currs" 
              :key="curr.id" 
              :content="curr" />
        </div>
      </div>

      <div class="settings-content general" v-else-if="currentTab === 'general'">
        <div class="settings-person-data">
          <form @submit.prevent="SubmitForm()">
            <label for="name">
              <span class="typography-m-thin">Как к вам обращаться</span>
              <misc-b-input 
              name="name"
              input-type="primary" 
              placeholder="Имя"
              v-model="Userdata.Name"
              />
            </label>
            <label for="name">
              <span class="typography-m-thin">Телефон (не обязательно)</span>
              <misc-b-input 
              name="phone"
              input-type="primary" 
              placeholder="Имя"
              v-model="Userdata.Phone"
              />
            </label>
            <label for="name">
              <span class="typography-m-thin">Telegram ID (не обязательно)</span>
              <misc-b-input 
              name="telegram"
              input-type="primary" 
              placeholder="Имя"
              v-model="Userdata.Telegram"
              />
            </label>
            <label for="name">
              <span class="typography-m-thin">E-mail (не обязательно)</span>
              <misc-b-input 
              name="email"
              input-type="primary" 
              placeholder="Имя"
              v-model="Userdata.Email"
              />
            </label>
            <misc-b-frame py="1" px="1.075">
              <b-button
              type="Primary"
              text="Сохранить данные"
              size="FULL"
              @click="SubmitForm()"
              />
            </misc-b-frame>
          </form>
        </div>
        
        <div class="settings-password">
          <form @submit.prevent="SubmitForm()">
            <label for="name">
              <span class="typography-m-thin">Действующий пароль</span>
              <misc-b-input 
              name="email"
              input-type="primary" 
              placeholder="Имя"
              v-model="Userdata.CurrentPassword"
              />
            </label>
            <label for="name">
              <span class="typography-m-thin">Новый пароль</span>
              <misc-b-input 
              name="email"
              input-type="primary" 
              placeholder="Имя"
              v-model="Userdata.Password"
              />
            </label>
            <label for="name">
              <span class="typography-m-thin">Повторите новый пароль</span>
              <misc-b-input 
              name="email"
              input-type="primary" 
              placeholder="Имя"
              v-model="Userdata.ConfirmPassword"
              />
            </label>
            <misc-b-frame py="1" px="1.075">
              <b-button
              type="Primary"
              text="Сохранить данные"
              size="FULL"
              @click="SubmitForm()"
              />
            </misc-b-frame>
          </form>
        </div>
      </div>

      <div class="settings-content loading" v-else>
        <misc-spinner/>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  .settings{
    &-page{
      display: flex;
      @include toRem(gap, 10);
      width: 100%;
    }
    &-panel{
      display: flex;
      flex-direction: column;
      @include toRem(padding, 20);
      @include toRem(border-radius, 15);
      background: linear-gradient(to bottom, $col-secondary-1, $col-secondary-2);
      width: 100%;
    }
    &-tabs{
      display: flex;
      flex-direction: row;
      @include toRem(gap, 20);
      flex-shrink: 1;
      @include toRem(margin-bottom, 20)
    }
    &-content{
      display: flex;
      &.loading{
        width: 100%;
        height: 100%;
      }
      &.general{
        display: flex;
        @include toRem(gap, 20)
      }
    }
    &-payments{
      flex-basis: 453px;
      flex-shrink: 1;
      position: relative;
      &::after{
        content: "";
        display: block;
        position: absolute;
        width: 30px;
        height: 24px;
        background-image: url(~/assets/svg/arrow.svg);
        background-position: center;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
      }
    }
    &-accounts{
      @include toRem(padding, 20);
      flex-shrink: 3;
      background: linear-gradient(to bottom, $col-secondary-1, $col-secondary-2);
      @include toRem(border-radius, 15);
      width: 100%;
    }
    &-password{
      background: linear-gradient(to right, rgba($col-primary-1, 0.5), rgba($col-primary-2, 0.5));
      @include toRem2Values(padding, 5, 20);
      @include toRem(border-radius, 15);
    }
  }
  .settings-person-data, .settings-password{
    display: flex;
    flex-direction: column;
    @include toRem(gap, 20);
    @include toRem(flex-basis, 584);
    &>label{
      display: flex;
      flex-direction: column;
      @include toRem(gap, 10);
    }
    &>form{
      @extend .settings-person-data
    }
  }
  @media screen and (max-width: 1025px) {
    .settings{
      &-content{
        flex-direction: column;
        @include toRem(gap, 20)
      }
      &-page{
        flex-direction: column;
      }
      &-payments::after{
        display: none;
      }
    }
  }
</style>