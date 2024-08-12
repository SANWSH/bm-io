<script setup>
import { onMounted, watch } from 'vue';
import { placeholder as applications } from '../placeholder';
const screen = window
const tabs = [
  {title: 'История операций', id: 'operations'},
  {title: 'Заработано на рефералах', id: 'referal-cashback'},
  {title: 'Привлечено клиентов', id: 'referals'},
  {title: 'Заработанные средства', id: 'cashback'},
]
const chartData = reactive([
  {
    data: [200, 300, 400, 700, 500, 600, 300, 450, 700, 100],
  },
  {
    data: [5, 7, 10, 18, 12, 14],
  },
])
const currentTab = ref('operations')

watch (
  () => currentTab.value,
  () => {
    if (currentTab.value === 'referal-cashback') {
      chartOptions.series[0].data = [200, 300, 400, 700, 500, 600]
    } else {
      chartOptions.series[0].data = [5, 7, 10, 18, 12, 14]
    }
  }
)

const months = ref([])
const chartOptions = reactive({
        responsive:{
          rules: [{
            condition: {
              maxWidth: 768
            },
          }],
        },
        chart: {
          type: 'spline',
          backgroundColor: 'none',
          lineColor: '#FFFFFF1A',
          tooltip: {
            backgroundColor: '#fff', // tooltip background color
            borderColor: '#ddd', // tooltip border color
            borderRadius: 5, // tooltip border radius
            borderWidth: 1, // tooltip border width
            style: {
              color: '#333' // tooltip text color
            }
          }
        },
        xAxis: {
          categories: months.value,
        },
        yAxis: {
          plotLines: [{
          value: 0,
          visible: false
        }],
          labels: {
            formatter: function() {
                  return ''
            }
          },
          gridLineWidth: 0
        },
        tooltip: {
          backgroundColor: '#3E4146',
          borderRadius: 15,
          formatter: function() {
            if (currentTab.value === 'referal-cashback') {
              return this.y + '<b> RUB</b> <br> В месяце: ' + this.x
            } else {
              return this.y + '<b> Клиентов</b> <br> В месяце: ' + this.x
            } 
          },
        },
        legend:{
            enabled: false
        },
         title: {
            text: null,
          },
        series: [{
        data: [200, 300, 400, 700, 500, 600, 600, 100, 200],
        color: '#FE8349',
        line: {
          shape: 'spline',
        },
        marker: {
          enabled: true,
          radius: 8,
          fillColor: '#FEB649',
          borderColor: '#FE8349'
        },
        chart:{
          backgroundColor: '#ffffff00'
        },
      }]
      })

     
function getDate() {
const year = 2024;
const mths = [];
for (let i = 0; i < 12; i++) {
  const date = new Date(year, i, 1);
  months.value.push(date.toLocaleString('default', { month: 'short' }));
}

console.log(months);
}

function formatDate(date) {
  return date.splice(3)
}

const scores = [
  {data: 3423, type:'rub', title:'Всего заработано', id: 0},
  {data: 1.5, type:'%', title:'Реф. процент', id: 1},
  {data: 20, type:null, title:'Всего рефералов', id: 2},
]
const tableHeaders = ['Дата создания', 'ID Заявки', 'Направление', 'Клиент', 'Бонус']
const tableContent = ['08.07.23', '124123515', 'Направление', 'Name', '2$']

onMounted(() => {
  getDate()
}) 

</script>

<template>
  <div class="referal-page">
    <AsidePanel/>
    <div class="referal-info">
      <div class="referal-settings">
        <div class="referal-settings-programm">
          <article class=" referal-about">
            <h1 class="font-normal text-2xl">Реферальная программа</h1>
            <span class="font-normal text-base">Зарабатывайте с нами. Как? Расскажите о нас,
               делитесь Вашей индивидуальной ссылкой с друзьями, знакомыми,
                размещайте наш рекламный материал на Ваших сайтах,
                 и получайте проценты с обменных операций приведённых пользователей.</span>
          </article>
            <div class="referal-link-wrapper">
              <span class="font-semibold text-base">Ваша ссылка для приглашения знакомых:</span>
              <misc-b-input 
              @click="copyContentToBuffer($event)"
              inputType="primary" 
              :inputValue="'https://test.bitmafia.io/?ref=l5'"
              appendIcon="copyIcon"
              :isActive="false"/>
              <span class="font-semibold text-base">Изменить реферальное имя</span>
              <misc-b-input 
              inputType="primary" 
              :inputValue="'https://test.bitmafia.io/?ref=l5'"
              infoValue="Это поле дает возможность выбирать красивое реферальное имя. После сохранения настроек старый хэш будет утерян."
              infoClass="text-normal text-white text-opacity-50 "
              appendIcon="editIcon"
              :isActive="true"/>
            </div>
          </div>
          <div class="referal-score">
            <div class="score-wrapper" v-for="score in scores" :key="score.id">
              <h3 class="text-xs text-white text-opacity-50">{{ score.title }}</h3>
              <h1 class="text-4xl text-white font-semibold">{{ score.data }} {{!!score.type? score.type.toUpperCase(): ''}}</h1>
            </div>
          </div>
        </div>
        <div class="referal-info-wrapper">
          <div class="referal-info-tabs">
            <b-button 
            v-for="tab in tabs"
            :key="tab.id"
            type="Tab" 
            size="X" 
            :text="tab.title"
            :class="currentTab === tab.id? 'active' : ''"
            @click="currentTab = tab.id"
            ></b-button>
          </div>
          <highchart
            v-if="currentTab !== 'operations' && currentTab !== 'cashback'"
            :options="chartOptions"
            :redrawOnUpdate="true"
          ></highchart>
          <application-list :items="applications" v-if="currentTab === 'operations'"/>
          <div class="cashback" v-if="currentTab === 'cashback'">
            <div class="cashback-item" v-for="item in 10" :key="item">
              <div class="cashback-header">
                <span class="typography-m-thin" v-for="header in tableHeaders" :key="header">
                  {{header}}
                </span>
              </div>
              <div class="cashback-body">
                <span class="typography-m" v-for="content in tableContent" :key="content">
                  {{content}}
                </span>
              </div>
              <span></span>
            </div>
            <div class="cashback-item" v-for="item in 10" :key="item">
            </div>
          </div>
        </div>
    </div>
  </div>  
</template>
<style lang="scss" scoped>
  .application{
    height: calc((100vh - (100vh - 104px)) * 5);
  }
  .cashback-header, .cashback-body{
    display: flex;
    gap: 20px;
    &:nth-child(1){
      opacity: .5;
    }
    &>span:nth-child(1) {
      display: flex;
      flex-basis: 124px 0;
    }
    &>span:nth-child(2) {
      display: flex;
      flex-basis: 114px 0;  
    }
    &>span:nth-child(3) {
      display: flex;
      flex-basis: 220px 0;  
    }
    &>span:nth-child(4) {
      display: flex;
      flex-basis: 420px 0;  
    }
    &>span{
      width: 100%;
    }
  }
  .cashback{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .cashback-item{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
<style lang="scss">
 .highcharts-credits{
  display: none;
 }
 .highcharts-yaxis{
  display: none;
 }
 .highcharts-plot-border{
  opacity: 0;
 }
 text{
  fill: $col-semitrans-white!important;
  color: $col-semitrans-white!important;
 }
 .highcharts-axis{
  border-color: transparent;
 }
 .highcharts-legend, .highcharts-legend-box{
  display: none;
 }

 .referal{
  &-page{
    display: flex;
    @include toRem(gap, 10);
    min-height: calc(100vh - 302px);
  }
  &-info{
    display: flex;
    position: relative;
    flex-direction: column;
    background: linear-gradient(to bottom, $col-exchange_1, $col-exchange_2);
    width: 100%;
    @include toRem(border-radius, 15);
  }
  &-info-wrapper{
    border-block-start: solid #FFFFFF1A 1px ;
    border-radius: 0;
  }
  &-info-tabs{
    display: flex;
    @include toRem(gap, 10);
    @include toRem(padding, 20);
  }
  &-about{
    display: flex;
    flex-direction: column;
    @include toRem(gap, 20);
    @include toRem(padding, 20);
  }
  &-link-wrapper{
    display: flex;
    @include toRem(gap, 10);
    @include toRem(padding, 20);
    flex-direction: column;
    margin-bottom: 3.875rem;
  }
  &-settings{
    display: flex;
  }
  &-settings-programm{
    display: flex;
    flex-direction: column;
  }
  &-settings-programm, &-score{
    width: calc((100vw / 12) * 3);
    min-width: 360px;
  }
  &-score{
    display: flex;
    flex-wrap: wrap;
    @include toRem(padding, 20);
    @include toRem(gap, 10);
    align-content: start;
    &>:nth-child(1) {
      width: 100%;
    }
  }
}
.score-wrapper{
  display: flex;
  flex-direction: column;
  @include toRem(gap, 10);
  @include toRem(padding, 20);
  background: linear-gradient(-82deg, $col-tab-secondary, $col-cards-2);
  @include toRem(border-radius, 15);
  height: max-content;
  width: calc(50% - 5px);
}
@media screen and (max-width: 1025px) {
  .referal{
    &-page{
      flex-direction: column;
    }
    &-info{
      background: #00000000;
      @include toRem(gap,10)
    }
    &-info-wrapper, &-settings{
      background: linear-gradient(to bottom, $col-exchange_1, $col-exchange_2);
      @include toRem(border-radius,15);
      border-block-start: none;
    }
    &-settings{
      flex-direction: column-reverse;
      >*{
        min-width: 100%;
      }
    }
    &-info-tabs{
      overflow-x: auto;
    }
  }
}
</style>