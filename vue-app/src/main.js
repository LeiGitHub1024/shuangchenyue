/* eslint-disable */
import { createApp } from 'vue'
import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import App from './App.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NextTick from './pages/NextTick.vue'
import Slot from './pages/SLOT/SlotFather.vue'
import Li from './pages/Li.vue'
import Layout23 from './pages/Layout23.vue'
import Shape from './pages/Shape.vue'
import ZIndex from './pages/ZIndex.vue'
import AJAX from './pages/AJAX.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path:'/404', component:NotFound},
  { path:'/nextTick',component:NextTick},
  { path:'/slot',component:Slot},
  { path:'/li',component:Li},
  { path:'/layout',component:Layout23},
  { path:'/shape',component:Shape},
  { path:'/z-index',component:ZIndex},
  { path:'/ajax',component:AJAX},


]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')

