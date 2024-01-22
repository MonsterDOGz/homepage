import Todolist from '../db/model/Todolist.js'

/**
 * @description: 新增条目
 * @param {*} content 内容
 * @param {*} datetime 设置时间
 * @param {*} priority 优先级
 * @param {*} author 作者
 * @return {*}
 */
async function createTodolist({ content, datetime, priority, author }) {
  const result = await Todolist.create({
    content,
    datetime,
    priority,
    author,
  })
  return result
}

/**
 * @description: 编辑条目
 * @param {*} id id
 * @param {*} content 内容
 * @param {*} datetime 设置时间
 * @param {*} priority 作者
 * @return {*}
 */
async function updateTodolist({ id, content, datetime, priority }) {
  const result = await Todolist.findOneAndUpdate({
    _id: id
  },{
    content,
    datetime,
    priority,
  }, {
    new: true
  })
  return result
}

/**
 * @description: 删除条目
 * @param {*} id id
 * @param {*} author 作者（验证一下作者，增加安全性，防止误删）
 * @return {*}
 */
async function deleteTodolist({id, author}) {
  const result = await Todolist.findOneAndDelete({
    _id: id,
    author
  })
  return result
}

/**
 * @description: 查询任务列表
 * @param {*} author 作者
 * @return {*}
 */
async function findTodolist({author}) {
  const result = await Todolist.find({
    author
  }).sort({ datetime: 1 })
  return result
}

/**
 * @description: 查询任务详情
 * @param {*} id 任务id
 * @return {*}
 */
async function findOneTodolist({id}) {
  const result = await Todolist.findById(id)
  return result
}

export {
  createTodolist,
  updateTodolist,
  deleteTodolist,
  findTodolist,
  findOneTodolist
}
