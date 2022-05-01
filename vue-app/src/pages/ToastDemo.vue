<template>
  <div>
    <button @click="createToast">创建一个Toast</button>
    <button @click="createToast2">创建一个带图片的Toast</button>

  </div>
</template>
<script>
import Toast from './Toast/Toast.js'
export default {
  methods: {
    createToast(){
      Toast('123')
    },
    createToast2(){
      Toast(
        { 
          text:'1得到的',
          img:'//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
          })
    }
  },
}
</script>