<template>
  <div>

    <!-- 新建财务明细 -->
    <el-dialog v-model="increaseMoney" title="" width="98%" :show-close="false">
      <span>新建财务明细</span>
      <div>
        <el-form :model="increaseMoneyForm" label-width="180px">
          <el-form-item label="申请到的财政预算">
            <el-input-number v-model="increaseMoneyForm.applyMoney" :min="0" :max="10000000" />
          </el-form-item>

          <el-form-item label="财务明细说明">
            <el-input v-model="increaseMoneyForm.introduce" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="increaseMoneyMx">增加</el-button>
            <!-- <el-button>Cancel</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="increaseMoney = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 新建财务明细 -->

    <!-- 修改财务明细 -->
    <el-dialog v-model="modifyMoney" title="" width="98%" :show-close="false">
      <span>修改财务明细</span>
      <div>
        <el-form :model="modifyMoneyForm" label-width="180px">

          <el-form-item label="财务明细id">
            <el-input-number v-model="modifyMoneyForm.id" :disabled="true" />
          </el-form-item>

          <el-form-item label="申请到的财政预算">
            <el-input-number v-model="modifyMoneyForm.applyMoney" :min="0" :max="10000000" />
          </el-form-item>

          <el-form-item label="财务明细说明">
            <el-input v-model="modifyMoneyForm.introduce" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button @click="modifyMoneyMxAdd">修改</el-button>
            <!-- <el-button>Cancel</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="modifyMoney = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 修改财务明细 -->

    <!-- 新建单个分工 -->
    <el-dialog v-model="increaseSingleWork" title="" width="98%" :show-close="false">
      <span>新建单个分工</span>
      <div>
        <el-form :model="increaseSingleWorkForm" label-width="180px">
          <el-form-item label="真实员工名">
            <el-input v-model="increaseSingleWorkForm.trueName" placeholder="" />
          </el-form-item>

          <el-form-item label="个人工作类型">
            <el-select v-model="increaseSingleWorkForm.workType" class="m-2" placeholder="Select">
              <el-option v-for="item in workTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>

          <el-form-item label="工作内容">
            <el-input v-model="increaseSingleWorkForm.workContent" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="increaseSingleWorkAdd">增加</el-button>
            <!-- <el-button>Cancel</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="increaseSingleWork = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 新建单个分工 -->
    <!-- 修改单个分工 -->
    <el-dialog v-model="modifySingleWork" title="" width="98%" :show-close="false">
      <span>修改单个分工</span>
      <div>
        <el-form :model="modifySingleWorkForm" label-width="180px">
          <el-form-item label="分工id">
            <el-input-number v-model="modifySingleWorkForm.id" :disabled="true" />
          </el-form-item>

          <el-form-item label="真实员工名">
            <el-input v-model="modifySingleWorkForm.trueName" placeholder="" />
          </el-form-item>

          <el-form-item label="个人工作类型">
            <el-select v-model="modifySingleWorkForm.workType" class="m-2" placeholder="Select">
              <el-option v-for="item in workTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>

          <el-form-item label="工作内容">
            <el-input v-model="modifySingleWorkForm.workContent" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="modifySingleWorkAdd">增加</el-button>
            <!-- <el-button>Cancel</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="modifySingleWork = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 修改单个分工 -->
    <el-divider content-position="left">功能区</el-divider>
    <div class="button">
      <el-button @click="this.$router.back()">返回</el-button>
    </div>

    <el-divider></el-divider>
    <el-descriptions :column="2" border>
      <el-descriptions-item span="2" label="项目名称" label-align="right" align="center" label-class-name="my-label"
        class-name="my-content">{{  stand.project_name  }}</el-descriptions-item>
      <el-descriptions-item label="项目类别" label-align="right" align="center">
        <el-tag class="ml-2" type="info">{{  stand.project_type_name  }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="项目自定义级别" label-align="right" align="center">{{  stand.project_tank_myself_name  }}
      </el-descriptions-item>
      <el-descriptions-item label="项目提交人" label-align="right" align="center">
        {{  stand.admin  }}
      </el-descriptions-item>
      <el-descriptions-item label="项目开始时间" label-align="right" align="center">{{  stand.project_starttime  }}
      </el-descriptions-item>
      <el-descriptions-item label="项目自预测结束时间" label-align="right" align="center">{{  stand.project_predict_endtime  }}
      </el-descriptions-item>

      <el-descriptions-item label="是否可修改" label-align="right" align="center">{{  stand.if_permit_modify  }}
      </el-descriptions-item>

      <el-descriptions-item label="提交部门" label-align="right" align="center">{{  stand.department_name  }}
      </el-descriptions-item>

      <el-descriptions-item label="项目提交状态" label-align="right" align="center">{{  stand.project_submit_state_name  }}
      </el-descriptions-item>

      <el-descriptions-item label="项目结项状态" label-align="right" align="center">{{  stand.project_finish_state_name  }}
      </el-descriptions-item>

      <el-descriptions-item label="项目提交时间" label-align="right" align="center">{{  stand.default_time  }}
      </el-descriptions-item>

      <el-descriptions-item label="项目通过立项审核时间" span="2" label-align="right" align="center">{{  stand.pass_review_time  }}
      </el-descriptions-item>

      <el-descriptions-item label="项目客观信息" span="2" label-align="right" align="center">{{  stand.project_askfor_name  }}
      </el-descriptions-item>
    </el-descriptions>

    <el-card class="box-card">

      <template #header>
        <div class="card-header">
          <span>项目简介</span>
        </div>
      </template>


      <Editor style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;" v-model="introduce" />
    </el-card>
    <el-card class="box-card">

      <template #header>
        <div class="card-header">
          <span>可行性分析</span>
        </div>
      </template>

      <Editor style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="feasibilityAnalyze" />
    </el-card>
    <el-card class="box-card">

      <template #header>
        <div class="card-header">
          <span>项目创新</span>
        </div>
      </template>


      <Editor style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;" v-model="innovation" />
    </el-card>


    <!-- 财务数据 -->

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>财务明细</span>
          <el-button @click="increaseMoney = true">新建财务明细</el-button>
        </div>
      </template>
      <el-table :data="money" border style="width: 100%;margin-top: 20px;">
        <el-table-column prop="id" label="财务编号" width="280" />
        <el-table-column prop="project_money_number" label="金额" width="280" />
        <el-table-column prop="project_money_introduce" label="财务简介" />
        <el-table-column fixed="right" label="操作" width="280">
          <template #default="scope">
            <el-button @click="modifyMoneyMx(scope.$index, scope.row)">修改</el-button>
            <el-popconfirm @confirm="cancelConfirm(scope.$index, scope.row)" title="你确定要注销这个财务明细吗?">
              <template #reference>
                <el-button>注销</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 财务数据 -->

    <!-- 分工明细 -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>分工明细</span>
          <span>
            <el-button @click="increaseSingleWork = true">新建单个分工</el-button>
            <el-button @click="increaseMoney = true">新建批量分工</el-button>
          </span>

        </div>
      </template>
      <el-table :data="work" border style="width: 100%;margin-top: 20px;">
        <el-table-column prop="id" label="分工编号" width="100" />
        <el-table-column prop="username" label="人员" width="100" />
        <el-table-column prop="project_person_type_name" label="类型" width="120" />
        <el-table-column prop="work_content" label="明细" />
        <el-table-column fixed="right" label="操作" width="180">
          <template #default="scope">
            <el-button @click="modifyMoneyMx(scope.$index, scope.row)">修改</el-button>
            <el-popconfirm @confirm="cancelConfirm(scope.$index, scope.row)" title="你确定要注销这个财务明细吗?">
              <template #reference>
                <el-button>注销</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分工明细 -->


    <el-table :data="opinion" border style="width: 100%;margin-top: 20px;">
      <el-table-column prop="id" label="沟通编号" width="180" />
      <el-table-column prop="opinion_type" label="沟通类型" width="180" />
      <el-table-column prop="username" label="操作人" />

      <el-table-column prop="default_time" label="时间" />
      <el-table-column prop="review_opinion_introduce" label="沟通说明" />
    </el-table>

    <!-- <div v-html="valueHtml" style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"></div> -->
  </div>
</template>
<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { getItemData, increaseMoneyMx, modifyMoneyMxAdd, cancelConfirm,increaseSingleWorkAdd,modifySingleWorkAdd } from '@/api/project.js'
import { h, onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElNotification } from 'element-plus'

export default {
  components: { Editor, Toolbar },
  data() {
    return {
      projectName: '',
      introduce: '',
      feasibilityAnalyze: '',
      innovation: '',
      defaultTime: '',
      userName: '',
      projectName: '',
      state: '',
      opinion: [],
      stand: {},
      money: [],
      work: [],
      increaseMoney: false,
      increaseMoneyForm: {
        applyMoney: 0,
        introduce: ''
      },
      modifyMoney: false,
      modifyMoneyForm: {
        id: '',
        applyMoney: 0,
        introduce: ''
      },
      increaseSingleWork: false,
      increaseSingleWorkForm: {
        trueName: '',
        workType: '',
        workContent: ''
      },
      modifySingleWork: false,
      modifySingleWorkForm: {
        id: '',
        trueName: '',
        workType: '',
        workContent: ''
      },
      workTypes:[
        {
          label:'项目负责人',
          value:'项目负责人',
        },{
          label:'项目主要成员',
          value:'项目主要成员',
        },{
          label:'项目一般成员',
          value:'项目一般成员',
        },{
          label:'项目参与成员',
          value:'项目参与成员',
        }
      ]
    }

  },
  methods: {
    modifySingleWorkAdd(){

    },
    increaseSingleWorkAdd(){
      increaseSingleWorkAdd(this.$store.state.project.id,this.increaseSingleWorkForm.trueName,this.increaseSingleWorkForm.workType,this.increaseSingleWorkForm.workContent,).then(resp=>{
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
        this.getItemData(this.$store.state.project.id)
        this.increaseSingleWork = false
      })
    },
    async cancelConfirm(index, row) {
      await cancelConfirm(row.id, this.$store.state.project.id).then(resp => {
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
      })
      this.getItemData(this.$store.state.project.id)
      console.log('确定')
    },
    modifyMoneyMxAdd() {
      modifyMoneyMxAdd(this.modifyMoneyForm.id, this.modifyMoneyForm.applyMoney, this.modifyMoneyForm.introduce, this.$store.state.project.id).then(resp => {
        console.log(resp)
        if (resp.data.flag) {

        }
        else {

        }
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
        this.getItemData(this.$store.state.project.id)
        this.modifyMoney = false
      })
    },
    modifyMoneyMx(index, row) {
      this.modifyMoney = true
      this.modifyMoneyForm.id = row.id
      this.modifyMoneyForm.applyMoney = row.project_money_number
      this.modifyMoneyForm.introduce = row.introduce
      console.log(row)
    },
    increaseMoneyMx() {

      increaseMoneyMx(this.$store.state.project.id, this.increaseMoneyForm.applyMoney, this.increaseMoneyForm.introduce).then(resp => {
        console.log("新增财务明细的返回")
        if (resp.data.flag) {
          console.log("新增财务明细成功")
          // 重新取一下数据
          this.getItemData(this.$store.state.project.id)
        }

        this.increaseMoney = false
      })
    },
    getItemData(id) {
      getItemData(id).then(resp => {
        console.log('这是项目的', resp)
        if (resp.data.flag) {
          // this.adviseName = resp.data.data.advice.advice_name
          this.introduce = resp.data.data.project.introduce
          this.feasibilityAnalyze = resp.data.data.project.feasibility_analyze
          this.innovation = resp.data.data.project.innovation

          // this.defaultTime = resp.data.data.advice.default_time
          // this.userName = resp.data.data.advice.admin
          // this.projectName = resp.data.data.advice.project_name
          // this.state = resp.data.data.advice.project_submit_state_name

          // this.opinion = resp.data.data.opinion;
          this.stand = resp.data.data.project
          this.money = resp.data.data.money
          this.opinion = resp.data.data.opinions
          this.work = resp.data.data.work
        }
      })
    }
  },
  created() {
    this.getItemData(this.$store.state.project.id)
    // props 会暴露到 `this` 上
    console.log('created', this.$store.state.project.id)
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = true
    next()
  }
}
</script>


<style scoped>
.my-label {
  background: var(--el-color-success-light-9);
}

.my-content {
  background: var(--el-color-danger-light-9);
}
</style>