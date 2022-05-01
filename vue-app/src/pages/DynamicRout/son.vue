<template>
  <div>
    我是动态路页面，我的id是{{this.$route.params.userId}}
  </div>
</template>
<script>
export default {

  mounted() {
    console.log('哈哈哈',this.$route,this.$route.params.userId);
    
  },
}
</script>
