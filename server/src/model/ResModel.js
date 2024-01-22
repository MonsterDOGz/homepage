/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:37:39
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2024-01-19 15:01:46
 * @FilePath: \homepage\server\src\model\ResModel.js
 * @Description: res 的数据模型
 */

/**
 * @description: 基础模块
 * @return {*}
 */
class BaseModel {
  constructor({ code, data, message }) {
    this.code = code
    this.data = data
    this.message = message
  }
}

/**
 * @description: 成功的数据模型
 * @return {*}
 */
class SuccessModel extends BaseModel {
  constructor(data = null, message = '') {
    super({
      code: 0,
      data,
      message
    })
  }
}

/**
 * @description: 失败的数据模型
 * @return {*}
 */
class ErrorModel extends BaseModel {
  constructor({ code, data = null, message = '' }) {
    super({
      code,
      data,
      message
    })
  }
}

export {
  SuccessModel,
  ErrorModel
}
