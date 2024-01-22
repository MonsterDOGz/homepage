import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-generic-session'
import redisStore from 'koa-redis'

import { REDIS_CONF } from './conf/db.js'
import { isProd } from './utils/env.js'

import index from './routes/index.js'
import userRouter from './routes/user.js'
import todolistRouter from './routes/todolist.js'

const app = new Koa()

// error handler
let onerrorConf = {}
if (isProd) {
  onerrorConf = {
    redirect: '/error'
  }
}
onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// session 配置
app.keys = ['UIsdf_7878#$']
app.use(session({
  key: 'homepage.sid', // cookie name 默认是 'koa.sid'
  prefix: 'homepage:sess:', // redis key 的前缀，默认是 'koa:sess:'
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // ms
  },
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

// 注册路由
app.use(index.routes(), index.allowedMethods())
app.use(userRouter.routes(), userRouter.allowedMethods())
app.use(todolistRouter.routes(), todolistRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

export default app
