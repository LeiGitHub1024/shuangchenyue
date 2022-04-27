<template>
  <div>
    <div style="display:flex;flex-direction: column;">
      <div class="flex">
        我是双括号，单向绑定：{{x1}}
      </div>
      <div class="flex">
        我是v-bind, 单向绑定：<span v-bind:style="{'background-color':bk}">ss </span> <button v-on:click="click">change color</button>
      </div>
      <div class="flex">
        我是v-module,双向绑定：<input type="text" v-model="x3"/>{{x3}}
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name:"VModule",
  data() {
    return {
      title:'vbind title',
      x1:1,
      x2:1,
      x3:1,
      bk:'tomato',
  

    }
  },
  methods: {
    click(){
      this.bk = this.bk=="tomato"?'green':"tomato"      
    }
  },
}
</script>
<style >
  .flex{
    flex: 1;
    
  }
  .spanStyle1{
    background-color: tomato;
  }
  .spanStyle2{
    background-color: yellowgreen;
  }
</style>