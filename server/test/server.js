/*
 * @Author: MonsterDOG
 * @Date: 2023-12-20 16:28:44
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-12-20 17:01:27
 * @FilePath: \homepage\server\test\server.js
 * @Description: jest server
 */

import request from 'supertest'
import server from '../src/app.js'

const jestServer = request(server.callback())

export default jestServer