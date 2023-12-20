/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:35:50
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-20 10:01:31
 * @FilePath: \homepage\server\src\controller\user.js
 * @Description: user controller
 */

import { getUserInfo, createUser } from '../services/user.js'
import { SuccessModel, ErrorModel } from '../model/ResModel.js'
import { registerUserNameNotExistInfo, registerUserNameExistInfo, registerFailInfo } from '../model/ErrorInfo.js'

/**
 * @description: 用户名是否存在
 * @param {string} username
 * @return {*}
 */
async function isExist(username) {
  const userInfo = await getUserInfo(username)
  if (userInfo && userInfo.length) {
    // 已存在
    return new SuccessModel(userInfo)
  } else {
    // 不存在
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}

/**
 * @description: 注册
 * @param {string} username
 * @param {string} password
 * @param {string} nickname
 * @return {*}
 */
async function register({ username, password, nickname }) {
  const userInfo = await getUserInfo(username)
  if (userInfo && userInfo.length) {
    // 用户名已存在
    return new ErrorModel(registerUserNameExistInfo)
  }

  try{
    await createUser({
      username,
      password,
      nickname
    })
    return new SuccessModel()
  } catch (e) {
    console.error(e.message, e.stack)
    return new ErrorModel(registerFailInfo)
  }
}

export {
  isExist,
  register
}
