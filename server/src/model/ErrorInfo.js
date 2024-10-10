/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:37:39
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2024-01-18 14:31:19
 * @FilePath: \homepage\server\src\model\ErrorInfo.js
 * @Description: 失败信息集合，包括 code 和 message
 */

const registerUserNameExistInfo = {
  code: 10001,
  message: '用户名已存在'
}
// 注册失败
const registerFailInfo = {
  code: 10002,
  message: '注册失败，请重试'
}
// 用户名不存在
const registerUserNameNotExistInfo = {
  code: 10003,
  message: '用户名未存在'
}
// 登录失败
const loginFailInfo = {
  code: 10004,
  message: '登录失败，用户名或密码错误'
}
// 未登录
const loginCheckFailInfo = {
  code: 10005,
  message: '您尚未登录'
}
// 修改密码失败
const changePasswordFailInfo = {
  code: 10006,
  message: '修改密码失败，请重试'
}
// 上传文件过大
const uploadFileSizeFailInfo = {
  code: 10007,
  message: '上传文件尺寸过大'
}
// 修改基本信息失败
const changeInfoFailInfo = {
  code: 10008,
  message: '修改基本信息失败'
}
// json schema 校验失败
const jsonSchemaFileInfo = {
  code: 10009,
  message: '数据格式校验错误'
}
// 删除用户失败
const deleteUserFailInfo = {
  code: 10010,
  message: '删除用户失败'
}
// cookie 过期，会话失效
const sessionExpirationInfo = {
  code: 10011,
  message: '登录过期，请重新登录'
}
// 创建任务失败
const createTodolistFailInfo = {
  code: 11001,
  message: '创建任务失败，请重试'
}
// 删除任务失败
const deleteTodolistFailInfo = {
  code: 11002,
  message: '删除任务失败，请重试'
}
// 编辑任务失败
const updateTodolistFailInfo = {
  code: 11003,
  message: '编辑任务失败，请重试'
}
// 查询任务列表失败
const queryTodolistFailInfo = {
  code: 11004,
  message: '查询任务列表失败，请重试'
}
// 查询任务详情失败
const queryTodolistDetailFailInfo = {
  code: 11005,
  message: '任务未存在'
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
  sessionExpirationInfo,
  createTodolistFailInfo,
  deleteTodolistFailInfo,
  updateTodolistFailInfo,
  queryTodolistFailInfo,
  queryTodolistDetailFailInfo,
}