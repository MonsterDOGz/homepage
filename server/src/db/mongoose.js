import { MONGODB_CONF } from '../conf/db.js'
import mongoose from 'mongoose'

const url = MONGODB_CONF.url;
const dbName = MONGODB_CONF.dbName;

mongoose.connect(`${url}/${dbName}`, {
  // 配置
}).then(() => {
  console.log('MongoDB连接成功')
}).catch(err => {
  console.log('err', err)
})

export default mongoose