// 配置mockjs
import { viteMockServe } from 'vite-plugin-mock'
export default function setupMockServer(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'mock', // 指定mockjs API存放文件夹
    localEnabled: !isBuild,
  })
}

