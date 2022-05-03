import { App } from '@vue/runtime-core'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes: routes
})

export function setupRouter(app: App) { // 优化路由定义
  app.use(router)
}

export default router