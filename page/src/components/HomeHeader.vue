<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const { logout } = useUserStore()
</script>

<template>
  <div class="header">
    <div class="header__title">个人主页</div>
    <div class="header__user">
      <img src="/dog.svg" alt="" class="header__user-profile">
      <span class="header__user-logout" @click="logout">登出</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0 0.04rem 0.04rem #eee;
  position: relative;
}
.header__title {
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  font-size: 0.24rem;
  font-weight: 600;
}
.header__user {
  position: absolute;
  top: 50%;
  right: 2vw;
  transform: translateY(-50%);
  font-weight: normal;
  .header__user-profile {
    width: 6vw;
    margin-right: 1vw;
    vertical-align: text-bottom;
  }
  .header__user-logout {
    cursor: pointer;
  }
}
</style>
