<script lang="ts" setup>
import { ref } from 'vue'
import MD5 from 'crypto-js/md5'
import { useRouter } from 'vue-router'
import { apiIsExist, apiRegister } from '@/request/modules/userApi'
import _ from 'lodash'

const router = useRouter()

const username = ref('')
const password = ref('')
const passwordRepeat = ref('')
const nickname = ref('')

// 判断用户名是否存在
const showIsExist = ref(false)
const handleIsExist = async () => {
  const {code} = await apiIsExist({
    username: username.value
  })
  if (!code) {
    showIsExist.value = true
  } else {
    showIsExist.value = false
  }
}
const inputUsername = _.throttle(handleIsExist, 1000)

// 判断前后两次密码是否一致
const showPasswordNotSame = ref(false)
const handleCheckPassword = () => {
  if (password.value !== passwordRepeat.value) {
    showPasswordNotSame.value = true
  } else {
    showPasswordNotSame.value = false
  }
}

// 登录
const handleRegister = async () => {
  if (showIsExist.value || showPasswordNotSame.value) return

  const { code, message } = await apiRegister({
    username: username.value,
    password: MD5(password.value).toString(),
    nickname: nickname.value,
  })
  alert(message)
  if (!code) {
    router.replace('/login')
  }
}
</script>

<template>
  <h1>注册</h1>
  <form @submit.prevent="handleRegister" class="login-form">
    <p>
      <input type="text" v-model="username" placeholder="用户名" @input="inputUsername" />
      <div v-show="showIsExist">用户名已存在</div>
    </p>
    <p><input type="password" v-model="password" placeholder="密码" @input="handleCheckPassword" /></p>
    <p>
      <input type="password" v-model="passwordRepeat" placeholder="确认密码" @input="handleCheckPassword" />
      <div v-show="showPasswordNotSame">前后两次密码不一致</div>
    </p>
    <p><input type="text" v-model="nickname" placeholder="昵称" /></p>
    <p><button type="submit">注册</button></p>
  </form>
</template>