// 对应 todolist 集合
import mongoose from '../mongoose.js'

// 用 Scheme 定义数据规范
const TodolistSchema = mongoose.Schema({
  // 内容
  content: {
    type: String,
    required: true, // 必须
  },
  // 设置时间
  datetime: {
    type: Date,
  },
  // 优先级
  priority: {
    type: String,
  },
  // 作者
  author: {
    type: mongoose.Schema.ObjectId,
    required: true,
  }
})

// Model 对应 collection
const Todolist = mongoose.model('todolist', TodolistSchema)

export default Todolist
