<template>
  <div>
    I am dad
    <Son> 
      <div> I am slot</div>
    </Son>
  </div>
</template>

<script>
import Son from './SlotSon.vue'
export default {
  name:"Slot",
  components:{Son}
}
</script>