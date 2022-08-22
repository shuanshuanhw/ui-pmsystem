<template>
<div class="test">

<div>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item >主页</el-breadcrumb-item>
    <el-breadcrumb-item>页面</el-breadcrumb-item>

  </el-breadcrumb>
</div>
  <div>
    <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <img :src="avatar" class="user-avatar">
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/vue/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
        <el-dropdown-item  @click.native="logout">
            <span>退出登录</span>
          </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
      </div>
          </div>
</template>
<script  lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import Cookies from "js-cookie";
import { useRoute, useRouter } from 'vue-router'
        // 获取路由实例
        const router = useRouter()
        const avatar: string = 'ren.jpg'
        const logout = ()=>{
          // 删除token，返回主页
          Cookies.remove("token");
          router.push('/').catch((e)=>{
          console.log(e)
                  });
        }
</script>
<style scoped>
.user-avatar{
    width: 40px;
}
.test{
  box-sizing:border-box;
    padding: 5px 20px 5px 20px;
    text-align: right;
    /* background: #fff0ff; */
    height: 100%;
    /* width:100%; */
    display: -webkit-flex; /* Safari */
  display: flex;
  /* 元素垂直居中 */
  align-items: center;
  /* 元素平均分配 */
  justify-content: space-between;
}
</style>