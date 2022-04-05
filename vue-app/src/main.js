/* eslint-disable */
import { createApp } from 'vue'
import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import App from './App.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path:'/404', component:NotFound},
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')

