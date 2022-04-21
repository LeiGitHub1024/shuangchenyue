<template>
    <div>

    <div class="triangle"></div>
    <div class='sector'> </div>
    <div class='square'></div>




  </div>
</template>
<style >
   
   .triangle{
     width: 0px;
     height: 0px;
     /* border: 100px solid;
     border-color: aqua tomato thistle yellowgreen; */

     border-left: 100px solid red ;
     border-top: 100px solid transparent;
     border-bottom: 100px solid transparent;
     border-right: 100px solid blue;
   } 
   .sector{
     height: 0;
     width: 0;
     border:100px solid transparent;
     border-top-color: red;
     border-radius: 100px;
   }
   .square{
     background-color: tomato;
     width:15vw;
     height: 15vw;
   }
   .square {
    width: 20%;
    height: 0;
    padding-top: 20%; /**margin 和padding 百分比都是相对父元素的width */
    background: orange;
  }
  


</style>


<script>
export default {
  name: "Shape"
}
</script>