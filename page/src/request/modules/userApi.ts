import axios from '../axiosInstance'
import { serviceOne } from '../baseUrl'

interface IIsExist {
  username: string
}
interface IRegister {
  username: string
  password: string
  nickname: string
}
interface ILoginResponse {
  id: string
  username: string
  nickname: string
}
interface ILogin {
  username: string
  password: string
}

/**
 * @description: 用户名是否存在
 * @param {IIsExist} params
 * @return {*}
 */
export function apiIsExist(params: IIsExist) {
  return axios({
    url: `${serviceOne}/user/isExist`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 注册
 * @param {IApiRegister} params
 * @return {*}
 */
export function apiRegister(params: IRegister) {
  return axios({
    url: `${serviceOne}/user/register`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 登录
 * @param {ILogin} params
 * @return {*}
 */
export function apiLogin(params: ILogin) {
  return axios<ILoginResponse>({
    url: `${serviceOne}/user/login`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 退出登录
 * @return {*}
 */
export function apiLogout() {
  return axios({
    url: `${serviceOne}/user/logout`,
    method: 'post',
    data: {}
  })
}