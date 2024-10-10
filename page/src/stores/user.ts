import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '@/utils/tools'
import { apiLogin, apiLogout } from '@/request/modules/userApi'


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

  // 登录
  async function login(username: string, password: string) {
    const { code, data, message } = await apiLogin({
      username,
      password,
    })
    alert(message)
    if (!code) {
      userInfo.value = data
      setLocalStorage('userInfo', JSON.stringify(userInfo.value))

      router.replace({ path:'/' })
    }
  }

  // 退出登录
  async function logout() {
    const { code, message } = await apiLogout()
    alert(message)
    if (!code) {
      clearCache()
      router.replace({ path:'/login' })
    }
  }

  // 移除本地存储用户信息
  function clearCache() {
    removeLocalStorage('userInfo')
    $reset()
  }

  // 重置 state
  function $reset() {
    userInfo.value = JSON.parse(getLocalStorage('userInfo') || 'null')
  }

  return {
    userInfo,
    isAuthenticated,
    login,
    logout,
    clearCache,
    $reset
  }
})