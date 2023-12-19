/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:35:50
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-19 09:51:05
 * @FilePath: \server\src\controller\user.js
 * @Description: user controller
 */

import { getUserInfo, createUser } from '../services/user.js'
import { SuccessModel, ErrorModel } from '../model/ResModel.js'
import { registerUserNameNotExistInfo, registerUserNameExistInfo, registerFailInfo } from '../model/ErrorInfo.js'

/**
 * @description: 用户名是否存在
 * @param {string} userName
 * @return {*}
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 已存在
    return new SuccessModel(userInfo)
  } else {
    // 不存在
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}

/**
 * @description: 注册
 * @param {string} userName
 * @param {string} password
 * @param {string} nickName
 * @return {*}
 */
async function register({ userName, password, nickName }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 用户名已存在
    return new ErrorModel(registerUserNameExistInfo)
  }

  try{
    await createUser({
      userName,
      password,
      nickName
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
