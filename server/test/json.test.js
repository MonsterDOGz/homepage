/*
 * @Author: MonsterDOG
 * @Date: 2023-12-20 16:28:51
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-20 16:56:45
 * @FilePath: \homepage\server\test\json.test.js
 * @Description: json test
 */

import server from './server.js'

test('json 接口返回数据格式正确', async () => {
  const res = await server.get('/api/json')
  // expect(res.body).toEqual({
  //   title: 'koa2 json'
  // })
  expect(res.body.title).toBe('koa2 json')
})