import { MONGODB_CONF } from '../conf/db.js'
import mongoose from 'mongoose'

const url = MONGODB_CONF.url;
const dbName = MONGODB_CONF.dbName;

console.log('url', url)
console.log('dbName', dbName)

mongoose.connect(`${url}/${dbName}?authSource=admin`, {
  // 配置
}).then(() => {
  console.log('MongoDB连接成功')
}).catch(err => {
  console.log('err', err)
})

export default mongoose