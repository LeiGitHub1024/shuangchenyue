<template>
  <div>
    <MiniHello msg="Welcome to Vue.js App"/>
  <div>Home Page</div>
  <router-view></router-view>
  </div>

</template>

<script>
import MiniHello from '../components/MiniHello.vue'

export default {
  name: 'HomePage',
  components: {
    MiniHello
  }
}
</script>
