/*
 * @Author: MonsterDOG
 * @Date: 2024-01-17 14:29:50
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2024-01-24 14:20:38
 * @FilePath: \homepage\server\src\routes\todolist.js
 * @Description: todolist api 路由
 */
import Router from 'koa-router'
import { create, update, del, queryList, queryDetail } from '../controller/todolist.js'
import { sessionExpirationInfo } from '../model/ErrorInfo.js'
import { ErrorModel } from '../model/ResModel.js'

const router = new Router()

router.prefix('/api/todolist')

// 判断是否登录
const isLogin = async (ctx, next) => {
  if (ctx.session?.userInfo?._id) {
    await next()
  } else {
    ctx.body = new ErrorModel(sessionExpirationInfo)
  }
}

// 创建
router.post('/create', isLogin, async (ctx, next) => {
  const author = ctx.session?.userInfo?._id
  const { content, datetime, priority } = ctx.request.body
  ctx.body = await create({
    content,
    datetime,
    priority,
    author,
  })
})

// 修改
router.post('/update', async (ctx, next) => {
  const { id, content, datetime, priority } = ctx.request.body
  ctx.body = await update({
    id,
    content,
    datetime,
    priority
  })
})

// 删除
router.post('/del', isLogin, async (ctx, next) => {
  const author = ctx.session?.userInfo?._id
  const { id } = ctx.request.body
  ctx.body = await del({id, author})
})

// 查询列表
router.post('/queryList', isLogin, async (ctx, next) => {
  const author = ctx.session?.userInfo?._id
  ctx.body = await queryList({author})
})

// 查询单条详情
router.get('/queryDetail', async (ctx, next) => {
  const { id } = ctx.request.query
  ctx.body = await queryDetail({id})
})

export default router
