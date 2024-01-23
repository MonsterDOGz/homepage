<script lang="ts" setup>
import { onMounted } from 'vue'
import Swiper from 'swiper';
// import { EffectCards } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cards';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import HomeDraggable from '@/components/HomeDraggable.vue'
import HomeHeader from '@/components/HomeHeader.vue'


onMounted(() => {
  const swiper = new Swiper('.swiper', {
    // modules: [EffectCards],
    initialSlide: 0,
    // effect: 'cards',
  });
  console.log(swiper)
})
</script>

<template>
  <div class="home">
    <HomeHeader />
    <div class="home-wrapper">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide--1">
            <HomeDraggable />
          </div>
          <!-- <div class="swiper-slide swiper-slide--2">二</div>
          <div class="swiper-slide swiper-slide--3">三</div>
          <div class="swiper-slide swiper-slide--4">四</div>
          <div class="swiper-slide swiper-slide--5">五</div>
          <div class="swiper-slide swiper-slide--6">六</div>
          <div class="swiper-slide swiper-slide--7">七</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 80vh;
  display: flex;
  flex-direction: column;
}
.home-wrapper {
  padding: 2vh;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}
.swiper {
  height: 100%;
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    height: 100%;
  }
}
</style>