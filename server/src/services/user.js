/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:42:18
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-19 09:43:29
 * @FilePath: \server\src\services\user.js
 * @Description: user services
 */

import User from '../db/model/User.js'
import { formatUser } from './_format.js'

/**
 * @description: 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @return {*}
 */
async function getUserInfo(userName, password) {
  // 查询条件
  const whereOpt = {
    userName
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  
  // 查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName'],
    where: whereOpt
  })
  if (result == null) {
    // 未找到
    return result
  }

  // 格式化
  const formatRes = formatUser(result.dataValues)

  return formatRes
}

/**
 * @description: 创建用户
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {string} nickName 昵称
 * @return {*}
 */
async function createUser({ userName, password, nickName }) {
  const result = await User.create({
    userName,
    password,
    nickName: nickName ? nickName : userName
  })
  return result.dataValues
}

export {
  getUserInfo,
  createUser
}