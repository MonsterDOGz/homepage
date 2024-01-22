import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'


const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/home.vue') },
  { path: '/register', name: 'Register', component: () => import('@/views/register.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/login.vue') },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const { isAuthenticated } = useUserStore()

  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // ❗️ 避免无限重定向
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'Login', replace: true }
  }
})

export default router
