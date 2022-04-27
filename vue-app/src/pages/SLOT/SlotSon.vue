<template>
  <div style="background-color:green; width:80vw; margin:0 auto;">
    <slot name="header"/>
    I am Son
    <slot/>   <!-- 默认插槽 -->
    <slot name="slot1" :one="user2" />
    <slot name="slot2" v-bind:users="user2"/>


    <slot name="footer"/>



  </div>

</template>

<script>
export default {
  name:"Son",
  data(){
    return {
      user2:{
        name:'张三',
        age:18
      }
    }
  }
}
</script>