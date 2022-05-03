// 将别名定义抽离出
import path from 'path'
import { AliasOptions } from 'vite'
const alias = [
  {
    find: '@', // 根目录
    replacement: path.resolve(__dirname, '../src')
  },
  {
    find: '@c', // 公共组件文件
    replacement: path.resolve(__dirname, '../src/components')
  },
  {
    find: '@as', // 静态资源文件夹
    replacement: path.resolve(__dirname, '../src/assets')
  },
  {
    find: '@p', // 公共组件,封装好的
    replacement: path.resolve(__dirname, '../src/packages')
  }
] as AliasOptions

export default alias