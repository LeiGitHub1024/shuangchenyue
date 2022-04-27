<template>
  <div style="background-color:tomato;">
    I am dad
    <Son> 
      <div style="background-color:yellow; width:50vw; margin:0 auto; " > I am no name slot</div>
      <template v-slot:header> 
        <div style="background-color:yellow; width:50vw; margin:0 auto; ">slot header</div>
      </template>
      <template v-slot:footer> 
        <div style="background-color:yellow; width:50vw; margin:0 auto; ">slot footer</div>
      </template>

      <template v-slot:slot1="{one}">
        <div>
          作用域插槽：I am {{one.name}}
        </div>
      </template>
       <template v-slot:slot2="slotProps">
        <div>
          作用域插槽：My age is {{slotProps.users.age}}
        </div>
      </template>

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