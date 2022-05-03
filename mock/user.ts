// 测试mockjs
// 访问地址 http://localhost:3000/api/user/info

import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请示成功',
        status: 'success',
        data: {},
      }
    },
  }
] as MockMethod[]
