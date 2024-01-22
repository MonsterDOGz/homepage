import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { setLocalStorage, getLocalStorage } from '@/utils/tools'
import { apiLogin } from '@/request/modules/userApi'


interface UserInfo {
  id: string
  username: string
  nickname: string
}

export const useUserStore = defineStore('user', () => {

  const userInfo = ref<UserInfo | null>(JSON.parse(getLocalStorage('userInfo') || 'null'))
  // 是否登录
  const isAuthenticated = computed(() => {
    return !!userInfo.value?.username
  })

  async function login(username: string, password: string) {
    const { code, data, message } = await apiLogin({
      username,
      password,
    })
    alert(message)
    if (!code) {
      userInfo.value = data
      setLocalStorage('userInfo', JSON.stringify(userInfo.value))

      router.replace({ path:'/'})
    }
  }

  function $reset() {
    userInfo.value = JSON.parse(getLocalStorage('userInfo') || 'null')
  }

  return {
    userInfo,
    isAuthenticated,
    login,
    $reset
  }
})