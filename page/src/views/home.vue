<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)

const showLoading = ref(true)
const showButton = ref(true)
const page1Video = ref<HTMLVideoElement | null>(null)

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
    stopPropagation: false,
    click: true,
  });
  homeBScroll.on('slidePageChanged', (page: any) => {
    const {pageY} = page
    if (pageY === 0 && !showButton.value) {
      handleVideoPlay()
    }
    if (pageY === 1) {
      handleVideoPause()
    }
  })
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

const clickPlayButton = () => {
  showButton.value = false
  handleVideoPlay()
}

const handleVideoPlay = () => {
  page1Video.value?.play().catch(function(error) {
    console.log('Video playback failed: ', error);
  });
}

const handleVideoPause = () => {
  page1Video.value?.pause();
}

const handleVideoEnded = (e: any) => {
  console.log(e)
}

const handleWindowLoad = (time: number = 3000) => {
  console.log('页面所有资源加载完成');
  setTimeout(() => {
    showLoading.value = false
  }, time)
}

const onWindowLoad = () => {
  handleWindowLoad(1500);
}

onMounted(() => {
  initScroll()
  initMap()

  if (document.readyState === 'complete') {
    console.log('complete');
    // 页面已经完全加载
    handleWindowLoad(3000);
  } else {
    console.log('load');
    window.addEventListener('load', onWindowLoad);
  }
})
onUnmounted(() => {
  window.removeEventListener('load', onWindowLoad);
})
</script>

<template>
  <div class="home">
    <!-- Loading -->
    <transition>
      <div class="home-loading" v-if="showLoading">
        <img src="../assets/preloader.gif" alt="">
      </div>
    </transition>
    <!-- 轮播，有 2 个 slide -->
    <div class="home-main">
      <div class="slide-wrapper">
        <div class="slide-content">
          <!-- 视频 -->
          <div class="slide-page page1">
            <div class="page1-button" v-if="showButton" @click="clickPlayButton()">
              <svg t="1735027449760" class="icon" viewBox="0 0 1032 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12659" width="200" height="200"><path d="M688.702466 1008.246154H327.35955C151.174396 1008.246154 7.815862 864.918883 7.815862 688.702466V327.35955C7.815862 151.174396 151.174396 7.815862 327.35955 7.815862h361.342916C864.903251 7.815862 1008.246154 151.174396 1008.246154 327.35955v361.342916c0 176.216417-143.342903 319.543688-319.543688 319.543688z m256.688528-680.886604c0-141.77973-114.92443-256.70416-256.688528-256.704161H327.35955c-141.748467 0-256.70416 114.92443-256.704161 256.704161v361.342916c0 141.77973 114.955693 256.70416 256.704161 256.70416h361.342916c141.764099 0 256.688529-114.92443 256.688528-256.70416V327.35955zM696.659013 900.856215H319.403003c-112.595303 0-204.18157-91.601899-204.18157-204.197202a20.977773 20.977773 0 0 1 41.90865 0c0 89.491616 72.781304 162.288551 162.27292 162.288551h377.25601c89.491616 0 162.288551-72.796935 162.288551-162.288551V302.614532a20.946509 20.946509 0 1 1 41.908651 0v394.044481c0 112.595303-91.601899 204.197202-204.197202 204.197202zM384.1496 331.17369l316.245395 158.114881a20.946509 20.946509 0 0 1 0 37.484873L384.1496 684.903957a21.024668 21.024668 0 0 1-20.399398-0.90664 20.993404 20.993404 0 0 1-9.910513-17.835796v-316.229763a20.930878 20.930878 0 0 1 30.309911-18.758068z m11.567476 301.098255L644.183318 508.031008l-248.466242-124.194042v248.434979z m405.299322-437.062984a162.36671 162.36671 0 0 0-104.357385-38.09451H319.403003c-89.491616 0-162.27292 72.796935-162.27292 162.288552v247.684655a20.946509 20.946509 0 0 1-41.90865 0V319.403003c0-112.595303 91.586267-204.18157 204.18157-204.18157h377.25601a204.462941 204.462941 0 0 1 131.337739 47.926863c8.847555 7.456332 9.973039 20.665138 2.547971 29.543957a21.009036 21.009036 0 0 1-29.528325 2.516708z" fill="#FF7878" p-id="12660"></path></svg>
            </div>
            <video ref="page1Video" loop @ended="handleVideoEnded">
              <source src="http://121.40.120.88/public/video/wedd-video.mp4" type="video/mp4">
              您的浏览器不支持 video 标签。
            </video>
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.home {
  width: 100vw;
  height: 100vh;
  position: relative;
  .home-loading {
	  width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: #fff;
    img {
      width: 100%;
      max-width: 800px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
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
          position: relative;
          .page1-button {
            width: 1rem;
            height: 1rem;
            padding: 0;
            border: 0;
            background-color: transparent;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            transform: translate(-50%, -50%);
            .icon {
              font-size: 1rem;
            }
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .page2 {
          position: relative;
          .page2_main {
            width: 80%;
            height: 80%;
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 5%;
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
            bottom: 10%;
            display: flex;
            justify-content: space-around;
            button {
              width: 44%;
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

video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
</style>