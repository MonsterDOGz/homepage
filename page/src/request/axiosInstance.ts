/*
 * @Author: MonsterDOG
 * @Date: 2024-01-19 09:43:25
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2024-01-22 15:09:09
 * @FilePath: \homepage\page\src\request\axiosInstance.ts
 * @Description: 基础 axios 实例，请求相应拦截器
 */
import axios, { AxiosRequestConfig } from 'axios'

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
    if (response.data.code !== 0) {
      // 错误
      console.log('response', response)
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
