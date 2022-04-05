# 霜晨月
> 西风烈，长空雁叫霜晨月。霜晨月，马蹄声碎，喇叭声咽。 雄关漫道真如铁，而今迈步从头越。从头越，苍山如海，残阳如血。

微前端、Vue、React、性能优化等技术的实践。

# https://juejin.cn/post/6844904158085021704#heading-15
## 使用Vue CLI 快速构建一个Vue项目，（yarn）

https://cli.vuejs.org/zh/guide/
yarn serve

## 使用React CLI 快速构建一个React项目 (npm)
https://juejin.cn/post/6844903797584592910
npx create-react-app ts-react-app --template typescript

npm run start

### react router安装： 
npm i react-router-dom -S
react-router：提供了router的核心 API。如Router、Route、Switch等，但没有提供有关dom操作进行路由跳转的API；
react-router-dom：提供了BrowserRouter、Route、Link等api，可以通过dom操作触发事件控制路由。
react-router-dom中包含了react-router，所以我们选择下 react-router-dom。





----------
在package.json scripts里的start或server加上open，就能自动打开啦



vue2?vue3 
npm?yarn

## 暂时不考虑做微前端
## 将该Vue项目作为基座主应用
### 创建微应用容器 - 用于承载微应用，渲染显示微应用；

### 注册微应用 - 设置微应用激活条件，微应用地址等等；

### 启动 qiankun；