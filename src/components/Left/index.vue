<template>
<div>
  <!-- 管理员菜单 -->
<div v-if="ifAdmin">
  <el-row class="tac">
    <el-col>
      <!-- <h5 class="mb-2">Default colors</h5> -->
      <div class="mb-2"><div><el-image style="width: 40px;" :src="url" /></div><div>项目绩效管理系统</div></div>
      
      <el-menu
        default-active="index"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
      >
      <el-menu-item index="index">
          <el-icon><document /></el-icon>
          <span>主页</span>
        </el-menu-item>

        <el-menu-item index="advise">
          <el-icon><document /></el-icon>
          <span>提议管理</span>
        </el-menu-item>

        <el-menu-item index="project">
          <el-icon><document /></el-icon>
          <span>立项管理</span>
        </el-menu-item>
        <el-menu-item index="finish">
          <el-icon><setting /></el-icon>
          <span>结项管理</span>
        </el-menu-item>

          <el-sub-menu index="function">
          <template #title>
            <el-icon><location /></el-icon>
            <span>功能</span>
          </template>
          <el-menu-item-group title="">
            <el-menu-item index="function-user">帐号管理</el-menu-item>
            <el-menu-item index="function-date">日期设置</el-menu-item>
            <el-menu-item index="function-evaluation">考评管理</el-menu-item>
            <el-menu-item index="function-money">分帐管理</el-menu-item>
          </el-menu-item-group>
    
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
  </div>
  <!-- 普通用户管理菜单 -->
  <div v-if="!ifAdmin">
    <el-row class="tac">
    <el-col>
      <!-- <h5 class="mb-2">Default colors</h5> -->
      <div class="mb-2"><div><el-image style="width: 40px;" :src="url" /></div><div>项目绩效管理系统</div></div>
      
      <el-menu
        default-active="index"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
      >
      <el-menu-item index="index">
          <el-icon><document /></el-icon>
          <span>主页</span>
        </el-menu-item>

        <el-menu-item index="advise-common">
          <el-icon><document /></el-icon>
          <span>提议管理</span>
        </el-menu-item>

        <el-menu-item index="project-common">
          <el-icon><document /></el-icon>
          <span>立项管理</span>
        </el-menu-item>
        <el-menu-item index="finish-common">
          <el-icon><setting /></el-icon>
          <span>结项管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</div>

</template>
<style scoped>
.mb-2{
  box-sizing:border-box;
  height: 60px;
  /* background-color: aqua; */
  padding: 5px 10px 5px 10px;
  display: -webkit-flex; /* Safari */
  display: flex;
  /* 元素垂直居中 */
  align-items: center;
  /* 元素平均分配 */
  justify-content: space-between;
  
}
.tac{
  width: 100%;
}
.el-menu{
  border-right: none;
}
</style>
<script>
import Cookies from "js-cookie";
import {ElMessage} from 'element-plus'
import {getPermission} from '@/api/index'

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export default {
  data() {
    return {
      url: '/u41.png',
		ifAdmin: false,
		permission:'2'
    };
  },
    methods:{
	async abc()
{
	const token = Cookies.get('token');
	await getPermission(token).then(resp=>{
		if(resp.data.flag)
		{
			this.permission = resp.data.data;
		}
		console.log(resp.data.data)

	if(this.permission === 'common')
	this.ifAdmin = false;
	else if(this.permission === 'admin')
	this.ifAdmin = true;
	else
	this.ifAdmin = false;

	})
},
        handleOpen(key,keyPath){
          console.log(key, keyPath)
        },
        handleClose(key,keyPath){
          console.log(key, keyPath)
        }
  },
  mounted() {
		this.abc();
	
  },
}

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>
