<template>
  <div>
  
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/"> <span style="margin-left:10px">Home</span></router-link> 
    <router-link to="/about"><span style="margin-left:10px">About</span></router-link>
    <router-link to="/404"><span style="margin-left:10px">404</span></router-link>
    <router-link to="/nextTick"><span style="margin-left:10px">NextTick</span></router-link>
    <router-link to="/slot"><span style="margin-left:10px">Slot</span></router-link>
    <router-link to="/li"><span style="margin-left:10px">Li</span></router-link>
    <router-link to="/layout"><span style="margin-left:10px">Layout</span></router-link>
    <router-link to="/shape"><span style="margin-left:10px">Shape</span></router-link>
    <router-link to="/z-index"><span style="margin-left:10px">ZIndex</span></router-link>
    <router-link to="/ajax"><span style="margin-left:10px">AJAX</span></router-link>


  </p>
  <router-view></router-view>
  
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MiniHello from './components/MiniHello.vue'

export default {
  name: 'App',
  components: {
    // MiniHello
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
