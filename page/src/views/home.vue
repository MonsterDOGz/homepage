<script lang="ts" setup>
import { onMounted } from 'vue'
import Swiper from 'swiper';
// import { EffectCards } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cards';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import HomeDraggable from '@/components/HomeDraggable.vue'


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
    <div class="home-title">home</div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--1">
          <HomeDraggable />
        </div>
        <div class="swiper-slide swiper-slide--2">二</div>
        <div class="swiper-slide swiper-slide--3">三</div>
        <div class="swiper-slide swiper-slide--4">四</div>
        <div class="swiper-slide swiper-slide--5">五</div>
        <div class="swiper-slide swiper-slide--6">六</div>
        <div class="swiper-slide swiper-slide--7">七</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.home-title {
  height: 20vh;
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 20vh;
}
.swiper {
  height: 80vh;
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    height: 100%;
    // background-color: #eee;
    // &--1 {
    //   background-color: red;
    // }
    // &--2 {
    //   background-color: orange;
    // }
    // &--3 {
    //   background-color: yellow;
    // }
    // &--4 {
    //   background-color: green;
    // }
    // &--5 {
    //   background-color: blue;
    // }
    // &--6 {
    //   background-color: blueviolet;
    // }
    // &--7 {
    //   background-color: purple;
    // }
  }
}
</style>