/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:42:25
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-18 16:42:50
 * @FilePath: \server\src\services\_format.js
 * @Description: 数据格式化
 */

/**
 * @description: 用户默认头像
 * @param {Object} obj 用户对象
 * @return {*}
 */
function _formatUserPicture(obj) {
  if (obj.picture == null) {
    obj.picture = ''
  }
  return obj
}

/**
 * @description: 格式化用户信息
 * @param {Array|Object} list 用户列表或者单个用户对象
 * @return {*}
 */
function formatUser(list) {
  if (list == null) {
    return list
  }

  if (list instanceof Array) {
    // 数组 用户列表
    return list.map(_formatUserPicture)
  }

  // 单个对象
  return _formatUserPicture(list)
}

export {
  formatUser
}