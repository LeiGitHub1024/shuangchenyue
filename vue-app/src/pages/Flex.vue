<template>
  <div>
    <content class="father1">
      <div class='son1' style="flex:1">1</div>
      <div class='son1' style="flex:1">2</div>
      <div class='son1'>3</div>
      <div class='son1' style="flex:0 1 202px">4</div>
    </content>
  </div>
</template>

<script>
export default {
  
}
</script>

<style >
  .father1{
    display:flex;

  }
  .son1{
    background-color: aquamarine;
    /* width: 100px; */
    height: 100px;
  }
</style>