/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:35:07
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-20 11:03:41
 * @FilePath: \homepage\server\src\conf\db.js
 * @Description: 数据库配置文件
 */

import { isProd } from '../utils/env.js'

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

// let MYSQL_CONF = {
//   host: 'localhost',
//   user: 'root',
//   password: '123zhoujie123',
//   port: '3306',
//   database: 'koa2_weibo_db'
// }

let MONGODB_CONF = {
  url: 'mongodb://127.0.0.1:27017',
  dbName: 'homepage'
}

if (isProd) {
  // 线上的 redis 配置
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }

  // 线上的 mysql 配置
  // MYSQL_CONF = {
  //   host: 'localhost',
  //   user: 'root',
  //   password: '123zhoujie123',
  //   port: '3306',
  //   database: 'koa2_weibo_db'
  // }

  // 线上的 mongodb 配置
  MONGODB_CONF = {
    url: 'mongodb://zhoujie:123456@127.0.0.1:27017',
    dbName: 'homepage'
  }
}

export {
  REDIS_CONF,
  // MYSQL_CONF
  MONGODB_CONF
}