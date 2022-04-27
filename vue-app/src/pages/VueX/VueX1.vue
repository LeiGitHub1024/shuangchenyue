<template>
  <div>
    
    {{this.$store.state.count}}
    <button v-on:click="click">dddd</button>
  </div>
</template>
<script>
import VueX from './VueX.vue'
export default {
  components: { VueX },
  name:'VueX1',
  data() {
    return {

    }
  },
  methods: {
    click(){
      this.$store.commit('increment',3)
      
    }
  },
}
</script>