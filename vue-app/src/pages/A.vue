<template>
  <div>
    <a href="http://www.w3school.com.cn" target="_blank">w3c</a>
    <div v-on:click="simulateA">不用a标签，模拟点击</div>
  </div>
</template>

<script>
export default {
  name:"A",
  methods: {
    simulateA(){
      // window.open(URL,name,specs,replace)
      console.log('11')
      window.open("http://www.w3school.com.cn",'_blank')
    }
  },
}
</script>