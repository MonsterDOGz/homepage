import Todolist from '../model/Todolist.js'

!(async () => {

  // 新建条目
  const todolist1 = await Todolist.create({
    content: '条目10内容',
    datetime: new Date(),
    priority: '1',
    author: '6580098a75478d48360f5ef4'
  })
  console.log('todolist1', todolist1)

  // 获取列表
  // const list = await Todolist.find({
  //   // author: '658010305edf99028e86c60d'
  //   // content: /2/ // 正则表达式，模糊查询
  // }).sort({ _id: -1 })
  // console.log('list', list)

  // 根据 id 获取单个条目
  // const todolist = await Todolist.findById('65800fa5dcccdc2cf2cff48a')
  // console.log('todolist', todolist)

  // 更新条目
  // const res = await Todolist.findOneAndUpdate(
  //   { _id: '65800fa5dcccdc2cf2cff48a' },
  //   {
  //     content: '内容111'
  //   },
  //   {
  //     new: true // 返回修改之后的最新的内筒，默认为false
  //   }
  // )
  // console.log('res', res)

  // 删除条目
  // const res = await Todolist.findOneAndDelete({
  //   _id: '65800fa5dcccdc2cf2cff48a',
  //   author: '6580098a75478d48360f5ef4' // 验证一下作者，增加安全性，防止误删
  // })
  // console.log('res', res)

})()