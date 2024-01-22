import Router from 'koa-router'

const router = new Router()

router.prefix('/api')


// 测试接口
router.get('/test', async (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: `koa2 test OK 3, ENV: ${process.env.NODE_ENV}`
  }
})

router.get('/json', async (ctx, next) => {
  const session = ctx.session
  if (session.viewNum === null) {
    session.viewNum = 0
  }
  session.viewNum++
  ctx.body = {
    title: 'koa2 json',
    viewNum: session.viewNum
  }
})

router.get('/profile/:username', async (ctx, next) => {
  const { username } = ctx.params
  ctx.body = {
    title: 'this is profile page',
    username,
  }
})

router.get('/loadMore/:username/:pageIndex', async (ctx, next) => {
  const { username, pageIndex } = ctx.params
  ctx.body = {
    title: 'this is loadMore API',
    username,
    pageIndex,
  }
})

export default router
