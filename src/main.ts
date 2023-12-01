// main.js
import uviewPlus from 'uview-plus'
 
// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia';
// pinia持久化存储插件
import persist from 'pinia-plugin-persistedstate'
const pinia = Pinia.createPinia()
pinia.use(persist)

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(pinia);
  return {
    app,
    Pinia, // 此处必须将 Pinia 返回

  }
}
// #endif