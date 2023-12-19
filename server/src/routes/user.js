/*
 * @Author: MonsterDOG
 * @Date: 2023-12-18 11:39:02
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-19 09:54:40
 * @FilePath: \server\src\routes\index.js
 * @Description: user Api 路由
 */
import Router from 'koa-router'
import { isExist, register } from '../controller/user.js'

const router = new Router()

router.prefix('/api/user')

// 注册路由
router.post('/register', async (ctx, next) => {
  const { userName, password, nickName } = ctx.request.body
  ctx.body = await register({
    userName,
    password,
    nickName
  })
})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

export default router