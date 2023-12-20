/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:39:02
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-19 20:46:08
 * @FilePath: \homepage\server\src\routes\user.js
 * @Description: user Api 路由
 */
import Router from 'koa-router'
import { isExist, register } from '../controller/user.js'

const router = new Router()

router.prefix('/api/user')

// 注册路由
router.post('/register', async (ctx, next) => {
  const { username, password, nickname } = ctx.request.body
  ctx.body = await register({
    username,
    password,
    nickname
  })
})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { username } = ctx.request.body
  ctx.body = await isExist(username)
})

export default router