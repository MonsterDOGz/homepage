/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:35:50
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-20 15:15:44
 * @FilePath: \homepage\server\src\controller\user.js
 * @Description: user controller
 */

import { getUserInfo, createUser } from '../services/user.js'
import { SuccessModel, ErrorModel } from '../model/ResModel.js'
import { registerUserNameNotExistInfo, registerUserNameExistInfo, registerFailInfo, loginFailInfo } from '../model/ErrorInfo.js'

/**
 * @description: 用户名是否存在
 * @param {string} username
 * @return {*}
 */
async function isExist(username) {
  const userInfo = await getUserInfo(username)
  if (userInfo) {
    // 已存在
    return new SuccessModel(userInfo, '用户名已存在')
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
  if (userInfo) {
    // 用户名已存在
    return new ErrorModel(registerUserNameExistInfo)
  }

  try{
    await createUser({
      username,
      password,
      nickname
    })
    return new SuccessModel(null, '注册成功')
  } catch (e) {
    console.error(e.message, e.stack)
    return new ErrorModel(registerFailInfo)
  }
}

/**
 * @description: 登录
 * @param {*} username
 * @param {*} password
 * @return {*}
 */
async function login(ctx, {username, password}) {
  const userInfo = await getUserInfo(username, password)
  if (!userInfo) {
    // 登录失败
    return new ErrorModel(loginFailInfo)
  }

  // 登录成功
  ctx.session.userInfo = userInfo

  return new SuccessModel(userInfo, '登录成功')
}

export {
  isExist,
  register,
  login
}
