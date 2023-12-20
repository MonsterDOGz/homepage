/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:42:18
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-20 10:07:09
 * @FilePath: \homepage\server\src\services\user.js
 * @Description: user services
 */

import User from '../db/model/User.js'
import { formatUser } from './_format.js'

/**
 * @description: 获取用户信息
 * @param {string} username 用户名
 * @param {string} password 密码
 * @return {*}
 */
async function getUserInfo(username, password) {
  // 查询条件
  const whereOpt = {
    username
  }

  if (password) {
    Object.assign(whereOpt, { password })
  }
  
  // 查询
  const result = await User.find({
    ...whereOpt
  }, ['id', 'username', 'nickname'])

  if (result == null) {
    // 未找到
    return result
  }

  // 格式化
  const formatRes = formatUser(result)

  return formatRes
}

/**
 * @description: 创建用户
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {string} nickname 昵称
 * @return {*}
 */
async function createUser({ username, password, nickname }) {
  const result = await User.create({
    username,
    password,
    nickname: nickname ? nickname : username
  })
  return result
}

export {
  getUserInfo,
  createUser
}