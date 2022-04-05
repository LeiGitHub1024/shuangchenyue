<template>
  <div>
  <MiniHello msg="Welcome to Vue.js App"/>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/"> <span style="margin-left:10px">Go to Home</span></router-link> 
    <router-link to="/about"><span style="margin-left:10px">Go to About</span></router-link>
    <router-link to="/404"><span style="margin-left:10px">Go to 404</span></router-link>
  </p>
  <router-view></router-view>
  
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MiniHello from './components/MiniHello.vue'

export default {
  name: 'App',
  components: {
    MiniHello
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
