// vite.config.ts 文件的plugin 选项配置入口文件
import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import setupMockServer from './mock'
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]
  plugins.push(setupMockServer(isBuild))
  return plugins
}