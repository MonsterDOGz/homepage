// 对应 user 集合
import mongoose from '../mongoose.js'

// 用 Scheme 定义数据规范
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    requires: true, // 必须
    unique: true // 唯一，不能重复
  },
  password: String,
  nickname: String
})

// Model 对应 collection
const User = mongoose.model('user', UserSchema)

export default User


