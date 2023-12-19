/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:37:39
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-19 09:46:19
 * @FilePath: \server\src\model\ErrorInfo.js
 * @Description: 失败信息集合，包括 errno 和 message
 */

const registerUserNameExistInfo = {
  errno: 10001,
  message: '用户名已存在'
}
// 注册失败
const registerFailInfo = {
  errno: 10002,
  message: '注册失败，请重试'
}
// 用户名不存在
const registerUserNameNotExistInfo = {
  errno: 10003,
  message: '用户名未存在'
}
// 登录失败
const loginFailInfo = {
  errno: 10004,
  message: '登录失败，用户名或密码错误'
}
// 未登录
const loginCheckFailInfo = {
  errno: 10005,
  message: '您尚未登录'
}
// 修改密码失败
const changePasswordFailInfo = {
  errno: 10006,
  message: '修改密码失败，请重试'
}
// 上传文件过大
const uploadFileSizeFailInfo = {
  errno: 10007,
  message: '上传文件尺寸过大'
}
// 修改基本信息失败
const changeInfoFailInfo = {
  errno: 10008,
  message: '修改基本信息失败'
}
// json schema 校验失败
const jsonSchemaFileInfo = {
  errno: 10009,
  message: '数据格式校验错误'
}
// 删除用户失败
const deleteUserFailInfo = {
  errno: 10010,
  message: '删除用户失败'
}
// 创建任务失败
const createTodolistFailInfo = {
  errno: 11001,
  message: '创建任务失败，请重试'
}
// 删除任务失败
const deleteTodolistFailInfo = {
  errno: 11002,
  message: '删除任务失败，请重试'
}

export {
  registerUserNameExistInfo,
  registerFailInfo,
  registerUserNameNotExistInfo,
  loginFailInfo,
  loginCheckFailInfo,
  changePasswordFailInfo,
  uploadFileSizeFailInfo,
  changeInfoFailInfo,
  jsonSchemaFileInfo,
  deleteUserFailInfo,
  createTodolistFailInfo,
  deleteTodolistFailInfo
}