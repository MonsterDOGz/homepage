import { createTodolist, updateTodolist, deleteTodolist, findTodolist, findOneTodolist } from '../services/todolist.js'
import { SuccessModel, ErrorModel } from '../model/ResModel.js'
import { createTodolistFailInfo, updateTodolistFailInfo, deleteTodolistFailInfo, queryTodolistFailInfo, queryTodolistDetailFailInfo } from '../model/ErrorInfo.js'

/**
 * @description: 新增条目
 * @param {*} content 内容
 * @param {*} datetime 设置时间
 * @param {*} priority 优先级
 * @param {*} author 作者
 * @return {*}
 */
async function create({ content, datetime, priority, author }) {
  try{
    const result = await createTodolist({
      content,
      datetime,
      priority,
      author,
    })
    return new SuccessModel(result, '新增成功')
  } catch (e) {
    console.error(e.message, e.stack)
    return new ErrorModel(createTodolistFailInfo)
  }
}

/**
 * @description: 编辑条目
 * @param {*} id id
 * @param {*} content 内容
 * @param {*} datetime 设置时间
 * @param {*} priority 优先级
 * @return {*}
 */
async function update({ id, content, datetime, priority }) {
  try {
    const result = await updateTodolist({
      id,
      content,
      datetime,
      priority,
    })
    return new SuccessModel(result, '修改成功')
  } catch (e) {
    return new ErrorModel(updateTodolistFailInfo)
  }
}

/**
 * @description: 删除条目
 * @param {*} id id
 * @param {*} author 作者
 * @return {*}
 */
async function del({id, author}) {
  try {
    const result = await deleteTodolist({id, author})
    return new SuccessModel(result, '删除成功')
  } catch (e) {
    return new ErrorModel(deleteTodolistFailInfo)
  }
}

/**
 * @description: 查询任务列表
 * @param {*} author 作者
 * @return {*}
 */
async function queryList({author}) {
  try {
    const result = await findTodolist({author})
    return new SuccessModel(result)
  } catch (e) {
    return new ErrorModel(queryTodolistFailInfo)
  }
}

/**
 * @description: 查询任务详情
 * @param {*} id 任务id
 * @return {*}
 */
async function queryDetail({id}) {
  try {
    const result = await findOneTodolist({id})
    return new SuccessModel(result)
  } catch (e) {
    return new ErrorModel(queryTodolistDetailFailInfo)
  }
}

export {
  create,
  update,
  del,
  queryList,
  queryDetail
}
