import User from '../model/User.js'

// 自执行的异步函数
!(async () => {

  // 创建用户
  const zhoujie = await User.create({
    username: 'zhoujie',
    password: '123'
  })
  console.log('zhoujie', zhoujie)

  // 查询
  // const list = await User.find()
  // console.log(list)

  // 模拟登录
  // const zhoujie = await User.find({
  //   username: 'liyanjia',
  //   password: '123'
  // })
  // console.log('zhoujie', zhoujie)

})()