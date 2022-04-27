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
    <router-link to="/jsonp"><span style="margin-left:10px">JSONP</span></router-link>
    <router-link to="/alive"><span style="margin-left:10px">KeepAlive</span></router-link>
    <router-link to="/a"><span style="margin-left:10px">A</span></router-link>
    <router-link to="/vmodule"><span style="margin-left:10px">V-module</span></router-link>
    <router-link to="/vuex"><span style="margin-left:10px">Vuex</span></router-link>

  </p>
  <!-- <main>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main> -->

  <router-view v-slot="{ Component }">
    <!-- 这里的include要确保组件的exportdafault要写name，不然不生效！ -->
     <keep-alive include="Alive,JSONP">
        <component :is="Component" />
      </keep-alive>
  </router-view>
 
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MiniHello from './components/MiniHello.vue'

export default {
  name: 'App',
  components: {
    // MiniHello
  },
  data() {
    return {
      keepAliveList:['ajax','alive']  
    }
  },
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
