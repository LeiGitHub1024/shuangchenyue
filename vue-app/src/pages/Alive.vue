<template>
  <div>
        <!-- <keep-alive> -->

    <select name="alive" id="alive-select" v-model="selected">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </select>
        <!-- </keep-alive> -->

  </div>
</template>
<script>
export default {
  name:"Alive",
  data() {
    return {
      selected:'cat'
    }
  },
}
</script>