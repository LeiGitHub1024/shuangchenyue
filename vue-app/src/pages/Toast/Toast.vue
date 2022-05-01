<template>
  <div class="Toast">
    <div v-if="typeof(content)==='string'">
      <p>{{content}}</p>
    </div>
    <div v-if="typeof(content)==='object'">
      <img src="content.img" width="27" height="12" usemap="#mp">
      <img src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" width="27" height="12" onerror="this.src='//www.baidu.com/img/flexible/logo/pc/index.png';this.onerror=null;" usemap="#mp">
      <p>{{content.text}}</p>
    </div>
  </div>
</template>

<script>
import {toRefs} from 'vue';
export default {
  props:{
    content:{type:Object||String},
    remove:{type:Function},
  },
  setup(props) {
    console.log(props.content)
    setTimeout(props.remove, 3000); //remove是什么，为什么生效
    return{...toRefs(props)} //toRefs是做什么的
  }
}
//实现全局Toast组件，支持string和Object两种类型的调用，垂直水平居中，图片文字上下混排
// 使用-------------------------------------------------------------------
// import Toast from './xx/toast'
// setup(){
//     Toast('提示文字1，三秒钟消失！');
//     Toast({
//             test:'提示文字2',
//             img:'https://xxx.com/aaa.jpeg'
//           });
// }
</script>

<style>
  .Toast{
    width:200px;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color: tomato;
    border-radius: 10px;
    text-align: center;
  }
</style>