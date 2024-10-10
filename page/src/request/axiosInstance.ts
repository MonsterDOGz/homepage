/*
 * @Author: MonsterDOG
 * @Date: 2024-01-19 09:43:25
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2024-01-24 15:00:31
 * @FilePath: \homepage\page\src\request\axiosInstance.ts
 * @Description: 基础 axios 实例，请求相应拦截器
 */
import axios, { AxiosRequestConfig } from 'axios'
import router from '@/router'
import { useUserStore } from '@/stores/user'

const instance = axios.create({
  baseURL: '/',
  withCredentials: true, // 跨域请求时发送Cookie
  timeout: 6000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const { code } = response.data
    if (code !== 0) {
      if (code === 10011) {
        // cookie过期，会话失效
        const { clearCache } = useUserStore()

        clearCache()
        router.replace('/login')
      }
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

type Response<T = any> = {
  code: number
  data: T
  message: string
}

export default <T>(config: AxiosRequestConfig) => {
  return new Promise<Response<T>>((res, rej) => {
    instance
      .request<Response<T>>(config)
      .then((response) => {
        res(response.data);
      })
      .catch((err: any) => {
        rej(err);
      });
  });
};
