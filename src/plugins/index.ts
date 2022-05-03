// 插件管理入口文件
import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
export function setupPlugins(app: App) {
  setupTailwindcss()
}