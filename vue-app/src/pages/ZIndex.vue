<template>
  <div>
    zindex
    <div style="background-color:yellow; height:500px;width:500px">
       <div class='father'>
        <div class="son"></div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name:"ZIndex"
}
</script>

<style >
  .father{
    height: 200px;
    width: 200px;
    background-color: tomato;
    position: relative;
    overflow:hidden
  }
  .son{
    position:relative;
    height: 100px;
    width: 100px;
    background-color: aquamarine;
    z-index: -1;
    float: left;
  }
</style>