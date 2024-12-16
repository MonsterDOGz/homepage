<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)

const showLoading = ref(false)

onMounted(() => {
  const homeBScroll = new BScroll('.slide-wrapper', {
    scrollX: false,
    scrollY: true,
    slide: {
      threshold: 100
    },
    momentum: false,
    bounce: false,
    stopPropagation: true
  });
  console.log('homeBScroll', homeBScroll)
})
</script>

<template>
  <div class="home">
    <!-- Loading -->
    <div class="home-loading" v-if="showLoading">Loading</div>
    <!-- 轮播，有 2 个 slide -->
    <div class="home-main">
      <div class="slide-wrapper">
        <div class="slide-content">
          <!-- 视频 -->
          <div class="slide-page page1"></div>
          <!-- 重要信息 -->
          <div class="slide-page page2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  position: relative;
  .home-loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #d4d4d4;
    text-align: center;
    padding-top: 40vh;
  }
  .home-main {
    width: 100%;
    height: 100%;
    .slide-wrapper {
      width: 100%;
      height: 100%;
      .slide-content {
        height: 100%;
        overflow: hidden;
        .slide-page {
          display: inline-block;
          width: 100%;
          &.page1 {
            background-color: #D6EADF;
          }
          &.page2 {
            background-color: #DDA789;
          }
        }
      }
    }
  }
}
</style>