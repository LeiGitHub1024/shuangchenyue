<template>
  <div>
    <span ref="s_ref">My name is {{name}}</span>

    <div>  <button @click="changeName">changeName</button></div>
    <div>结果看控制台</div>
  

  </div>
</template>

<script>
export default {
  name:"Demo",
  data(){
    return{ name:"chichi"}
  },
  methods: {
    changeName(){
      this.name=  this.name=='qiaqia'? "chichi":"qiaqia"
      console.log("直接打印this.$refs[’s_ref‘].innerHTML",this.$refs["s_ref"].innerHTML);//这个不能获取到最新的DOM
      this.$nextTick(()=>{
        console.log("在nextTick中打印",this.$refs["s_ref"].innerHTML);//这个不能获取到最新的DOM
      })
    }
  },
  
}
</script>
