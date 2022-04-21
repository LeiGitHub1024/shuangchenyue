<template>
  <div>
    <button @click="ajaxRequest">ajax request</button>
  </div>
</template>

<script>
import $ from "jquery"

export default {
  name:"AJAX",
  data(){
    return{

    }
  },
  methods: {
    ajaxRequest:()=>{
      //使用jQuery
      // $.ajax({
      //   url:"https://cdn.plyr.io/3.6.8/plyr.svg",
      //   data: {name:""},
      //   type:'Get',
      //   // dataType:'json',
      //   success:function(data){
      //     // data = jQuery.parseJSON(data);  //dataType指明了返回数据为json类型，故不需要再反序列化
      //     console.log(data);
      //   }
      // })

      //使用XMLHttpRequest模拟 AJAX
      function success(data){
        console.log(data);
      }
      function failed(err){
        console.log(err);
      }
      var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
      request.onreadystatechange = function(){
        if(request.readyState===4){//请求完成
          if(request.status===200){
            success(request.responseText)
          }else{
            failed(request.status)
          }
        }else{
          //请求还在继续
        }
      }
      request.open('GET','https://cdn.plyr.io/3.6.8/plyr.svg')
      request.send();
      alert('请求已发送')



    }



  },

  




}
</script>