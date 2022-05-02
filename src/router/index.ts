import { App } from '@vue/runtime-core'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    }
  ] as RouteRecordRaw[] // 路由配置
})

export function setupRouter(app: App) { // 优化路由定义
  app.use(router)
}

export default router