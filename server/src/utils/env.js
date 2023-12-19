/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:43:38
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-18 15:24:59
 * @FilePath: \homepage\server\src\utils\env.js
 * @Description: 环境变量
 */

const ENV = process.env.NODE_ENV

const isDev = ENV === 'dev'
const notDev = ENV !== 'dev'
const isProd = ENV === 'production'
const notProd = ENV !== 'production'
const isTest = ENV === 'test'
const notTest = ENV !== 'test'

export {
  isDev,
  notDev,
  isProd,
  notProd,
  isTest,
  notTest,
}
