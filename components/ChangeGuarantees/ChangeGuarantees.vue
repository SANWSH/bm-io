<template>
  <div class="benefit-info-container">
    <div class="benefit-info-header-section">
      <div class="benefit-info-header-content">
        Внушительные резервы в каждом городе. Сделки объемом от 10 млн
        желательно согласовывать за 2-3 часа, чтобы мы могли подготовить
        нужную сумму под вас.
      </div>
    </div>
    <div class="benefit-info-content-wrapper">
      <div class="benefit-info-hero-background" :style="{ backgroundImage: `url(${getImageUrl('guaranteeBack')})` }">
        <img :src="getImageUrl('guaranteeImg')" class="benefit-info-hero-foreground" alt="image">
      </div>
      <div class="benefit-info-content">
        <div class="benefit-info-content-text">
          <span>
            Сделки полностью анонимны и конфиденциальны. Мы не требуем от вас
            личных данных, получение средств происходит по кодовому слову. При
            желании можете не заходить в офис — мы вынесем вам кэш на улицу.
          </span>
          <br>
          <br>
          <span>
            Офисы располагаются в охраняемых бизнес-центрах, в большинстве из
            них — пропускная система. Полная безопасность для вас и ваших
            средств. Для сделок от 30 млн по вашему желанию можем предоставить
            сопровождение до конечной точки.
          </span>
          <br>
          <br>
          <span>
            Для клиентов желающих получить
            средства без личного контакта, доступны варианты передачи средств
            бесконтактным путем, через банковскую ячейку, вашего курьера или
            через курьера Яндекс.Такси (для крупных городов).
          </span>
          <br>
          <br>
          <span>
            При необходимости,
            мы готовы доставить наличные в любой город РФ в течении суток.
            Средства доставляет лично управляющий обменного сервиса. Максимально
            ответственный и профессиональный подход с нашей стороны.
          </span>
        </div>
        <misc-b-frame px="20" py="15" is-px>
          <BButton type="Primary" size="FULL" class="button" text="Перейти к обмену" @click="$router.push('/')" />
        </misc-b-frame>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { getImageUrl } from "../../composables/imageURL";

const image = ref<string | null>(null);
image.value = getImageUrl('guaranteeBack')

</script>

<style lang="scss">
.benefit-info-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  font-size: 16px;
}

.benefit-info-header-section {
  display: flex;
  justify-content: flex-end;
}

.benefit-info-header-content {
  border-radius: 15px;
  background: linear-gradient(91deg, #3D4047 5.56%, #2E3136 104.85%);
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 1068px;
  font-weight: 600;
}

.benefit-info-content-wrapper {
  padding: 10px 10px 10px 10px;
  display: flex;
  gap: 10px;
  border-radius: 15px;
  border: 1px solid #101214;
  background: linear-gradient(93deg, #272A2F 0%, #191D24 99.77%);
}

.benefit-info-hero-background {
  aspect-ratio: 751/533;
  display: block;
  background-size: cover;
  position: relative;
  flex: 2 1;
  width: 100%;
  height: auto;
  border-radius: 15px;
  position: relative;

  &::after {
    content: "";
    background-image: url('~/assets/images/guaranteeBack.png');
    width: 100%;
    height: auto;
    position: absolute;
    inset: 0;
    z-index: -1;
    background-size: cover;
    animation: glowing 10s infinite;
    @apply blur-2xl
  }
}

.benefit-info-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.benefit-info-hero-foreground {
  margin-left: auto;
  aspect-ratio: 751/677;
  background-position: bottom;
  position: absolute;
  bottom: 0;
  right: 0;
}

.benefit-info-content-text {
  font-weight: 400;
}

.buttonBlock {
  border-radius: 15px;
  border: 1px solid #101214;
  background: linear-gradient(93deg, #272A2F 0%, #191D24 99.77%);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (max-width: 768px) {

  .benefit-container {
    gap: 136px;
  }

  .benefit-info-header-section {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
  }

  .benefit-info-content-wrapper {
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }

  .benefit-info-content {
    gap: 20px;
  }
}

@media (max-width: 1536px) {
  .benefit-info-hero-background {
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
  }
}

@media (max-width: 1480px) {
  .button {
    font-size: 19px;
  }
}
</style>