<template>
  <div>
      <!-- 管理员主页 -->
      <div v-if="ifAdmin">
        	<div style="margin-top: 100px;">
		<h2 style="font-family:微软雅黑;color: black;font-weight: bold;">大家好！项目绩效小组成员们！</h2>

</div>
      </div>
      <!-- 普通用户主页 -->
      <div v-if="!ifAdmin">

	    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>顺德图书馆绩效管理系统简介</span>
      </div>
    </template>
    <div class="text item">激励图书馆员工积极参与各种专项工作的积极性，进一步提高图书馆整体服务质量和工作效能，确保“项目强馆”发展战略的实施，根据《顺德图书馆绩效考核及奖金分配方案》文件精神，制定本单位项目绩效考评奖励实施方案。</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>考评内容</span>
      </div>
    </template>
    <div class="text item">项目绩效考评采用分级分类的方式对跨单位、跨部门的专项工作进行绩效评定。项目分为读者活动、展览、宣传推广、学术活动、业务提升、技术研发、其他七大类。</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>项目等级</span>
        
      </div>
    </template>
    <div class="text item">
		<p>项目按重要性分为A、B、C、D四个等级。每年在A级项目中，由项目绩效管理小组二次评审出不超过10%的A+项目。</p>
		<p>A级项目：与本单位业务发展密切相关，对本地图书馆业务发展具有巨大推进作用，具有创造性的项目。</p>
		<p>B级项目：对本单位业务发展具有较大推进作用的，具有创造性的项目。</p>
		<p>C级项目：对本单位业务发展的推进、服务效益的提高、服务领域的拓展具有一定的促进作用的项目。</p>
		<p>D级项目：是指短、平、快的微型、小型项目。</p>


	</div>
  </el-card>


  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>项目成员说明</span>
        
      </div>
    </template>
    <div class="text item">

		<p>项目组的成员分为四个级别进行分值评定：项目负责人、主要成员、一般成员、参与成员。</p>
		<p>项目负责人：整个项目工作的管理者。</p>
		<p>主要成员：在项目活动中担任主要重要任务的责任者。</p>
		<p>一般成员：承担相对次要任务的成员。</p>
		<p>参与成员：利用本职工作和岗位资源参与项目的员工。（如安保、后勤、网络、机电等工作）。</p>
		<p>项目提议者是指最先向项目绩效管理小组提交《顺德图书馆项目提议申报表》的员工，享有优先担任项目负责人的权利，获得双重分数，以此鼓励全馆创新。如项目提议者是馆领导，馆领导不直接参与项目实施，该项目由部门主任或其他员工申报或认领，组建团队执行。如果是连续性的项目，则项目提议者只能参与首年度的评审。</p>

	</div>
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>项目绩效管理小组</span>
        
      </div>
    </template>
    <div class="text item">项目绩效管理小组由馆长、各高级岗人员组成，馆长为组长、副馆长为副组长、高级岗为成员，对全馆项目绩效工作进行评审。项目绩效管理小组日常工作采取召集人制，召集人由小组选出。</div>
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>操作要求</span>
    
      </div>
    </template>
    <div class="text item">		
		<p>每年重大项目由馆长工作会议指定项目负责人，其他项目的项目负责人自主选定。除了指定或部分跨单位工作外，一般情况下馆领导不担任项目负责人。</p>
		<p>为保障项目的质量与实施效果，实行项目总量控制，项目负责人所在部门年度立项上限为20个，其中一般性管理岗位、专业技术岗位员工担任项目负责人比例应不低于部门当年立项项目的50%。项目负责人均为同部门的计该部门项目1个，项目负责人分属不同部门的计所属部门项目各1个。各部门须做好年度立项规划，防止项目的随意性、无计划性。</p>
		<p>项目未如期完成，取消项目负责人下一年度所有项目申报及参与资格。</p>
		<p>不同意立项或资料填写有误的项目申报表，修改资料后仅可重新提交一次。</p>
		</div>
  </el-card>


      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from "js-cookie";
import {ElMessage} from 'element-plus'
import {getPermission} from '@/api/index'

export default {
  data() {
    return {
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

	}).catch(error=>{
    console.log(error)
  })
},

  },
  mounted() {
		this.abc();
	
  },
}

 
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: left;
}

.text {
  font-size: 14px;
  text-align: left;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  margin-top: 10px;
}
</style>