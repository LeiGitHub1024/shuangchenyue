<template>
  <div >
    <div class='wrap'>
      <div class='left'>使用浮动+BFC或者浮动+margin</div>
      <div class='right'>ss</div>
    </div>
    <hr/>
    <div class='wrap1'>
      <div class='left1'>使用弹性盒</div>
      <div class='right1'>ss</div> 
    </div>
    <hr/>
    <div class='wrap2'>
      <div class='left2'>使用弹性盒</div>
      <div class='mid2'>ss</div> 
      <div class='right2'>ss</div> 
    </div>
      <hr/>
    <div class='wrap3'>
      <div class='mid3'>ss</div> 
      <div class='left3'>圣杯</div>
      <div class='right3'>ss</div> 
    </div>
     <hr/>
    <div class='wrap4'>
      <div class='mid4'>
        <div class='midinner'>sss</div>
      </div> 
      <div class='left4'>双飞翼</div>
      <div class='right4'>ss</div> 
    </div>

  </div>
</template>
<script>
export default {
  name:"Layout23",
  beforeCreate() {//修改一下body的样式，把白边去掉。
    document.getElementsByTagName("body")[0].className="bg"
  },


}
</script>
<style >
  .bg{
    margin: 0;
    padding: 0;
  }
  .wrap{
    margin: 0;
    height: 10rem;
    width: 100vw;;
  }
  .left{
    width: 200px;
    height: 10rem;
    float: left;
    background-color: tomato;
  }
  .right{
    width: auto ;
    height: 10rem;
    /* margin-left:200px; */  /*设置margin手动调 */
    overflow: hidden; /*设置BFC */
    background-color: blue;
  }

  .wrap1{
    display: flex;
    height: 10rem;
  }
  .left1{
    height: 10rem;
    background-color: tomato;
    width:200px;
  }
  .right1{
    background-color: greenyellow;
    height: 10rem;
    flex:1; /**独占后面的 */
  }

  .wrap2{
    height:10rem;
    display: flex;
  }
  .left2{
    background-color: tomato;
    width:200px;
  }
  .mid2{
    background-color: greenyellow;
    flex:1;
  }
  .right2{
    background-color: tomato;
    width:200px;
  }

  .wrap3{
    height:10rem;
    padding: 0 200px 0 200px;
  }
  .left3{
    float:left;
    width: 200px;
    background-color: tomato;
    height:10rem;
    margin-left: -100%;
    position: relative;
    right: 200px;  
  }
  .mid3{
    float:left;
    background-color: greenyellow;
    height:10rem;
    width:100%; /**这是关键 */
  }
  .right3{
    float:left;
    width: 200px;
    background-color: tomato;
    height:10rem;
    margin-left: -200px;
    position: relative;
    left: 200px;

  }

  .wrap4,.left4,.mid4,.right4{
    height:10rem;
    float: left;
  }

  .wrap4{
    width:100%;
  }
  .left4{
    background-color: tomato;
    width:200px;
    margin-left: -100%;
  }
  .mid4{
    background-color: greenyellow;
    width:100%;
  }
  .midinner{
    margin:0 200px 0 200px;
    height:200px;
    background-color: aqua;
    overflow:sc ;
  }
  .right4{
    background-color: tomato;
    width:200px;
    margin-left: -200px;
  }



</style>