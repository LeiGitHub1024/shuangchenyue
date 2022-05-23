<template>
  <div>
    <MiniHello msg="Welcome to Vue.js App"/>
  <div>Home Page</div>
  <div class="contentBox">content-box</div>
  <div class='borderBox'>border-box</div>

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

<style >
  .contentBox{
    width:100px;
    padding: 20px;
    background-color: tomato;
    box-sizing: content-box;
  }
  .borderBox{
    width:100px;
    padding: 20px;
    background-color: aquamarine;
    box-sizing: border-box;
  }
</style>
