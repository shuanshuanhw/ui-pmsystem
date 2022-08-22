<template>
  <div class="common-layout">
    <el-container>
      <el-aside><Left></Left></el-aside>
      <el-container>
        <el-header><Top></Top></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>

</style>
<script>
import Left from '@/components/Left'
import Top from '@/components/Top'
export default {
    components:{
        Left,
        Top,
    }
}
</script>
<style scoped>
.el-header{
  /* margin: 0; */
  padding: 0;
  position: relative; 
   width: calc(100% - 200px);
   height: 60px; 
   left: 200px; 
   overflow-x:hidden;
  box-shadow: 0 5px 5px rgba(0,21,41,.08);
  /* flex: 1; */
}

.el-aside{
  /* background-color: blue; */
  -moz-box-shadow: 10px 0px 5px rgba(0,21,41,.08); /* 老的 Firefox */
  box-shadow: 5px 0px 5px rgba(0,21,41,.08);
  min-height: 100vh;
  /* width: 100%; */
  height: 100%;
  width: 200px;
  display: block;
  position: absolute; 
   left: 0;
  top: 0;
  bottom: 0;
}
.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  }

</style>