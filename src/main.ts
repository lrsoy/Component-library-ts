import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupPlugins } from '@/plugins/index'
async function mountApp() {
  const app = createApp(App)
  setupRouter(app)
  setupPlugins(app)
  await router.isReady() // 当路由初始化成功后，再去挂载 app
  app.mount('#app')
}
mountApp()