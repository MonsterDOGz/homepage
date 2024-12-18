<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)

const showLoading = ref(false)
// setTimeout(() => {
//   showLoading.value = false
// }, 5000)

const initScroll = () => {
  const homeBScroll = new BScroll('.slide-wrapper', {
    scrollX: false,
    scrollY: true,
    slide: {
      loop: false,
      autoplay: false,
      threshold: 100,
    },
    momentum: false,
    bounce: false,
    stopPropagation: true
  });
  console.log('homeBScroll', homeBScroll)
}

const initMap = () => {
  const centerLatlng = new window.TMap.LatLng(31.250843,117.275882); //地图的中心点的经纬度。
  const myOptions = {
      zoom: 14,
      center: centerLatlng,
      showControl: false,
      // baseMap: {
      //   type: 'vector',
      //   features: ['base', 'building3d'], // 隐藏矢量文字
      // },
  }
  const map = new window.TMap.Map(document.getElementById("map"), myOptions); //地图实例
  console.log('map', map)
  new window.TMap.MultiMarker({
    map: map, // 显示Marker图层的底图
    styles: {
      small: new window.TMap.MarkerStyle({
        width: 34,
        height: 46,
        // anchor: { x: 36, y: 32 },
        src: 'https://mapapi.qq.com/web/lbs/visualizationApi/demo/img/big.png',
        color: '#333',
        size: 16,
        direction: 'bottom',
        strokeColor: '#fff',
        offset: { x: 0, y: 8 },
        strokeWidth: 2,
      }),
    },
    geometries: [
      {
        styleId: 'small',
        position: centerLatlng,
        content: '鸿福金陵酒店',
      },
    ],
  });
}

onMounted(() => {
  initScroll()
  initMap()
})
</script>

<template>
  <div class="home">
    <!-- Loading -->
    <div class="home-loading" v-if="showLoading">
      <svg t="1734418764801" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1532" width="200" height="200"><path d="M272 704a47.84 47.84 0 0 0-33.936 14.064l-96 96a48 48 0 1 0 67.872 67.872l96-96A48 48 0 0 0 272 704z m-48-192a48 48 0 0 0-48-48H48a48 48 0 1 0 0 96h128a48 48 0 0 0 48-48z m-14.064-369.936a48 48 0 1 0-67.872 67.872l96 96a48 48 0 1 0 67.872-67.872l-96-96zM752 320a47.84 47.84 0 0 0 33.936-14.064l96-96a48 48 0 1 0-67.872-67.872l-96 96A48 48 0 0 0 752 320z m33.936 398.064a48 48 0 1 0-67.872 67.872l96 96a48 48 0 1 0 67.872-67.872l-96-96zM512 800a48 48 0 0 0-48 48v128a48 48 0 1 0 96 0v-128a48 48 0 0 0-48-48z m464-336h-128a48 48 0 1 0 0 96h128a48 48 0 1 0 0-96zM512 0a48 48 0 0 0-48 48v128a48 48 0 1 0 96 0V48a48 48 0 0 0-48-48z" fill="" p-id="1533"></path></svg>
    </div>
    <!-- 轮播，有 2 个 slide -->
    <div class="home-main">
      <div class="slide-wrapper">
        <div class="slide-content">
          <!-- 视频 -->
          <div class="slide-page page1">
            <video src="http://121.40.120.88:8080/video/wedd-video.mp4" controls></video>
          </div>
          <!-- 重要信息 -->
          <div class="slide-page page2">
            <div class="page2_main">
              <div class="page2_main-wrapper">
                <div class="page2_main-title">诚邀您参加</div>
                <div class="page2_main-address">庐江县文昌西路199号鸿福金陵酒店4F鸿福厅</div>
                <div id="map" class="map"></div>
              </div>
            </div>
            <div class="page2_button">
              <button class="button">宾客回复</button>
              <button class="button">查看赴宴好友</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes myRotate
{
	from {transform: rotate(0deg);}
	to {transform: rotate(360deg);}
}

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
    .icon {
      font-size: 0.5rem;
      animation: myRotate 3s linear infinite;
    }
  }
  .home-main {
    width: 100%;
    height: 100%;
    .slide-wrapper {
      width: 100%;
      height: 100%;
      .slide-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .slide-page {
          display: inline-block;
          width: 100%;
          height: 100%;
          &.page1 {
            background-color: #D6EADF;
          }
          &.page2 {
            background-color: #DDA789;
          }
        }
        .page1 {
          video {
            width: 100%;
            height: 100%;
          }
        }
        .page2 {
          position: relative;
          .page2_main {
            width: 80vw;
            height: 80vw;
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 5vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .page2_main-wrapper {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .page2_main-title {
                font-size: 0.3rem;
                font-weight: 600;
                text-align: center;
              }
              .page2_main-address {
                text-align: center;
                line-height: 1.5;
              }
              .map {
                width: 100%;
                height: 50%;
              }
            }
          }
          .page2_button {
            width: 100%;
            position: absolute;
            bottom: 10vh;
            display: flex;
            justify-content: space-around;
            button {
              width: 44vw;
              height: 2.5em;
              border-radius: 1.25em;
              box-sizing: border-box;
              padding: 0;
            }
          }
        }
      }
    }
  }
}
</style>