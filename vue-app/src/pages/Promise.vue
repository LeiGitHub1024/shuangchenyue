<template>
  <div>
    异步
    <div>使用promise，1秒延迟后随机改变timer    <button v-on:click="promise_click">Promise</button></div>
    
    <div> <button @click="async_click">Async</button></div>
    <div>timer:{{timer}}</div>
  </div>
</template>
<script>
export default {
  name:'Promise',
  data() {
    return {
      timer:0,
    }
  },
  methods: {
    promise_click(){
      console.log(1);
      new Promise((resolve,reject)=>{
        setTimeout(() => {
          let x = Math.random()
          if(x>0.5){
            resolve(x)
          }else{
            reject(x)
          }
        }, 1000);
      }).then(res=>{
        this.timer = res
      }).catch(err=>{
        this.timer = "小于.5"
      }).finally(
        msg=>{
          console.log('finally')
        }
      )
    },
    async async_click(){
      try{
        let x = await new Promise((resolve,reject)=>{
        setTimeout(() => {
          let x = Math.random()
          if(x>0.5){
            resolve(x)
          }else{
            reject(x)
          }
        }, 500);
      })
        this.timer = x
      }catch(err){
        this.timer = err+'小于1/2'
      }

      
    }

  },
}
</script>