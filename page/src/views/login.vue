<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import MD5 from 'crypto-js/md5'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const userStore = useUserStore()

const handleLogin = async () => {
  await userStore.login(username.value, MD5(password.value).toString())
}
const handleOpenRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div class="login">
    <div class="login-title">Welcome</div>
    <form @submit.prevent="handleLogin" class="login-form">
      <p><input type="text" v-model="username" placeholder="用户名" /></p>
      <p><input type="password" v-model="password" placeholder="密码" /></p>
      <p>
        <button type="submit">登录</button>
        <span class="btn-register" @click="handleOpenRegister">注册</span>
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  padding-top: 2rem;
  .login-title {
    font-size: 0.5rem;
    line-height: 1rem;
    font-weight: 700;
  }
  .login-form {
    p {
      margin: 0.3rem 0;
      position: relative;
      .btn-register {
        cursor: pointer;
        text-decoration: underline;
        display: inline-block;
        position: absolute;
        left: 70%;
        bottom: 20%;
      }
    }
  }
}
</style>