<template>
  <div>
    动态路由，id:{{id}}
    <button v-on:click="getRandId">获取id</button>
    跳转：
    <!-- <router-link :to="{ name: 'dynamicRout', params: { id: id }}">按钮</router-link> -->
    <router-link :to="'/dynamicRout/'+id" >目标</router-link>

  </div>
</template>
<script>
export default {
  name:'DynamicRout',
  data() {
    return {
      id:1
    }
  },
  methods: {
    getRandId(){
      this.id = Math.floor(Math.random()*10)
    }
  },
}
</script>
