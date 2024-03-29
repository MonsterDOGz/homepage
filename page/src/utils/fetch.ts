interface IFetch {
  method: string
  url: string
  params: string
  data: object
  headers?: object
}

/**
 * @description: 自定义fetch请求，增加签名
 * @param {*} obj {method, url, params, data, headers}
 * @return {*} 返回相应值
 */
async function fetchCustom(obj: IFetch) {
  // 解构赋值
  let { method, url, params, data, headers = {} } = obj

  // 判断是否有params参数
  // 1、如果有params参数，则把params对象转换成 key=value&key=value的形式，并且拼接到url之后
  // 2、如果没有params参数，则不管
  if (params) {
    // 把对象转换成 key=value&key=value 的方法
    // 固定写法：new URLSearchParams(obj).toString()
    let str = new URLSearchParams(params).toString()
    // console.log(str)
    // 拼接到url上
    url += '?' + str
  }

  // 最终的结果
  let res
  // 判断是否有data参数，如果有，则需要设置给body，否则不需要设置
  if (data) {
    // 如果有data参数，此时直接设置
    res = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    })
  } else {
    res = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
  }

  return res.json()
}

export default fetchCustom
