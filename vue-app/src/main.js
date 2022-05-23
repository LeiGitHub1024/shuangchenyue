/* eslint-disable */
import { createApp } from 'vue'
import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import store from './pages/VueX/store'
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
import JSONP from './pages/JSONP.vue'
import Alive from './pages/Alive.vue'
import A from './pages/A.vue'
import VModule from './pages/Vmodule.vue'
import VueX from './pages/VueX/VueX.vue'
import VueX1 from './pages/VueX/VueX1.vue'
import VueX2 from './pages/VueX/VueX2.vue'
import VueX3 from './pages/VueX/VueX3.vue'
const DynamicRout = ()=>import('@/pages/DynamicRout/main.vue') //懒加载动态路由
const DynamicRoutSon = ()=>import('@/pages/DynamicRout/son.vue') 
const Promise = ()=>import('@/pages/Promise.vue')
const ToastDemo = ()=>import('@/pages/ToastDemo.vue')
const Flex = ()=>import('@/pages/Flex.vue')

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
  { path:'/jsonp',component:JSONP},
  { path:'/alive',component:Alive},
  { path:'/a',component:A},
  { path:'/vmodule',component:VModule},
  { path:'/vuex',component:VueX},
  { path:'/vuex/1',component:VueX1},
  { path:'/vuex/2',component:VueX2},
  { path:'/vuex/3',component:VueX3},
  { path:'/dynamicRout',component:DynamicRout},
  { path:'/dynamicRout/:userId',component:DynamicRoutSon},
  { path:'/promise',component:Promise},
  { path:'/toast',component:ToastDemo},
  { path:'/flex',component:Flex},


]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// createApp(App).mount('#app')

