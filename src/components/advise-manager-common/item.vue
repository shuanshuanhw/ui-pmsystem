<template>
<div>
    <!-- item <a @click="$router.back()">aaa</a> -->
            <el-button size="small" type="danger" @click="this.$router.back()"
          >返回</el-button>
</div>
</template>
<script>
export default {
  props: ['id'],
  updated(){
console.log('updated',this.$store.state.id) 
  },
  created() {
    // props 会暴露到 `this` 上
    console.log('created',this.$store.state.id) 
  },
  beforeRouteLeave(to,from,next)
  {
    to.meta.keepAlive = true
    next()
  }
}
</script>
<style scoped>

</style>