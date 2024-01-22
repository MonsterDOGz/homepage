/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:39:02
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2024-01-22 17:09:09
 * @FilePath: \homepage\server\src\routes\user.js
 * @Description: user Api 路由
 */
import Router from 'koa-router'
import { isExist, register, login } from '../controller/user.js'

const router = new Router()

router.prefix('/api/user')

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { username } = ctx.request.body
  ctx.body = await isExist(username)
})

// 注册
router.post('/register', async (ctx, next) => {
  const { username, password, nickname } = ctx.request.body
  ctx.body = await register({
    username,
    password,
    nickname
  })
})

// 登录
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  const result = await login({
    username,
    password
  })

  if (result.data) {
    ctx.session.userInfo = result.data
  }

  ctx.body = result
})

export default router