import axios from '../axiosInstance'
import { serviceOne } from '../baseUrl'

interface ICreate {
  content: string
  datetime: Date
  priority: string
}
interface IUpdate {
  id: string
  content: string
  datetime: string
  priority: string
}
interface IDel {
  id: string
}


/**
 * @description: 创建
 * @param {ICreate} params
 * @return {*}
 */
export function apiCreate(params: ICreate) {
  return axios({
    url: `${serviceOne}/todolist/create`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 修改
 * @param {IUpdate} params
 * @return {*}
 */
export function apiUpdate(params: IUpdate) {
  return axios({
    url: `${serviceOne}/todolist/update`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 删除
 * @param {IDel} params
 * @return {*}
 */
export function apiDel(params: IDel) {
  return axios({
    url: `${serviceOne}/todolist/del`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 查询列表
 * @return {*}
 */
export function apiQueryList() {
  return axios({
    url: `${serviceOne}/todolist/queryList`,
    method: 'post',
    data: {}
  })
}

/**
 * @description: 查询单条详情
 * @param {string} id
 * @return {*}
 */
export function apiQueryDetail(id: string) {
  return axios({
    url: `${serviceOne}/todolist/queryDetail?id=${id}`,
    method: 'get'
  })
}
