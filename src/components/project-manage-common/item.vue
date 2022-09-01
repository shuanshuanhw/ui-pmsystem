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
            <el-button type="primary" @click="modifySingleWorkAdd">修改</el-button>
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
    <!-- 新建批量分工 -->
    <el-dialog v-model="increaseBatchWork" title="" width="98%" :show-close="false">
      <span>新建批量分工</span>
      <div>
        <el-form :model="increaseBatchWorkForm" label-width="180px">
          <el-form-item label="批量选择员工">
            <el-tree-select v-model="increaseBatchWorkForm.trueName" :data="treeData" multiple
              :render-after-expand="false" show-checkbox />

          </el-form-item>

          <!-- <el-form-item label="真实员工名">
            <el-input v-model="modifySingleWorkForm.trueName" placeholder="" />
          </el-form-item> -->

          <el-form-item label="个人工作类型">
            <el-select v-model="increaseBatchWorkForm.workType" class="m-2" placeholder="Select">
              <el-option v-for="item in workTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>

          <el-form-item label="工作内容">
            <el-input v-model="increaseBatchWorkForm.workContent" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="increaseBatchWorkAdd">新增</el-button>

          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="increaseBatchWork = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 新建批量分工 -->
    <el-divider content-position="left">功能区</el-divider>
    <div class="button">
      <!-- 这里需要一个权限 -->
      <el-button @click="">注销</el-button>
      <el-button @click="this.$router.back()">返回</el-button>
    </div>

    <el-divider></el-divider>

    <!-- 基本资料 -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>基本资料</span>
          <!-- 这里要有一个权限判断 -->
          <el-button class="button">修改</el-button>
        </div>
      </template>
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

        <el-descriptions-item label="项目通过立项审核时间" span="2" label-align="right" align="center">{{  stand.pass_review_time 
          }}
        </el-descriptions-item>

        <el-descriptions-item label="项目客观信息" span="2" label-align="right" align="center">{{  stand.project_askfor_name  }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <!-- 基本资料 -->


    <el-card class="box-card">

      <template #header>
        <div class="card-header">
          <span>项目简介</span>
          <!-- 这里要有一个权限判断 -->
          <el-button class="button">修改</el-button>
        </div>
      </template>


      <Editor style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;" v-model="introduce" />
    </el-card>
    <el-card class="box-card">

      <template #header>
        <div class="card-header">
          <span>可行性分析</span>
          <!-- 这里要有一个权限判断 -->
          <el-button class="button">修改</el-button>
        </div>
      </template>

      <Editor style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="feasibilityAnalyze" />
    </el-card>
    <el-card class="box-card">

      <template #header>
        <div class="card-header">
          <span>项目创新</span>
          <!-- 这里要有一个权限判断 -->
          <el-button class="button">修改</el-button>
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
            <el-button @click="increaseBatchWork = true">新建批量分工</el-button>
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
            <el-button @click="modifyWorkMx(scope.$index, scope.row)">修改</el-button>
            <el-popconfirm @confirm="cancelConfirmWork(scope.$index, scope.row)" title="你确定要注销这个个人分工吗?">
              <template #reference>
                <el-button>注销</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分工明细 -->

    <!-- 沟通纪录 -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>沟通纪录</span>
        </div>
      </template>
      <el-table :data="opinion" border style="width: 100%;margin-top: 20px;">
        <el-table-column prop="id" label="沟通编号" width="180" />
        <el-table-column prop="opinion_type" label="沟通类型" width="180" />
        <el-table-column prop="username" label="操作人" />

        <el-table-column prop="default_time" label="时间" />
        <el-table-column prop="review_opinion_introduce" label="沟通说明" />
      </el-table>
    </el-card>
    <!-- 沟通纪录 -->

  </div>
</template>
<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { getItemData, increaseMoneyMx, modifyMoneyMxAdd, cancelConfirm, increaseSingleWorkAdd, modifySingleWorkAdd, cancelConfirmWork, increaseBatchWorkAdd } from '@/api/project.js'
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
      workTypes: [
        {
          label: '项目负责人',
          value: '项目负责人',
        }, {
          label: '项目主要成员',
          value: '项目主要成员',
        }, {
          label: '项目一般成员',
          value: '项目一般成员',
        }, {
          label: '项目参与成员',
          value: '项目参与成员',
        }
      ],
      increaseBatchWork: false,
      increaseBatchWorkForm: {
        trueName: '',
        workType: '',
        workContent: ''
      },
      treeData: [
        {
          value: '技术部',
          label: '技术部',
          children: [
            {
              value: '黄维',
              label: '黄维',
            },
            {
              value: '黄锦豪',
              label: '黄锦豪',
            }, {
              value: '曾威',
              label: '曾威',
            }, {
              value: '杨建文',
              label: '杨建文',
            }, {
              value: '梁巧华',
              label: '梁巧华',
            },
          ]
        }, {
          value: '地方文献部',
          label: '地方文献部',
          children: [
            {
              value: '张宇',
              label: '张宇',
            }, {
              value: '张月兰',
              label: '张月兰',
            }, {
              value: '黄锦辉',
              label: '黄锦辉',
            }, {
              value: '梁键培',
              label: '梁键培',
            }, {
              value: '钟贯荣',
              label: '钟贯荣',
            },
          ]
        },
        {
          value: '基层服务部',
          label: '基层服务部',
          children: [
            {
              value: '卢静',
              label: '卢静',
            }, {
              value: '陈姗姗',
              label: '陈姗姗',
            }, {
              value: '邓宪君',
              label: '邓宪君',
            }, {
              value: '甘剑伟',
              label: '甘剑伟',
            }, {
              value: '郭礼贤',
              label: '郭礼贤',
            }, {
              value: '孙静',
              label: '孙静',
            }, {
              value: '黄芳',
              label: '黄芳',
            }, {
              value: '李文涛',
              label: '李文涛',
            }, {
              value: '谭伟恒',
              label: '谭伟恒',
            },
          ]
        },
        {
          value: '少儿服务部',
          label: '少儿服务部',
          children: [
            {
              value: '何颖',
              label: '何颖',
            }, {
              value: '蔡海红',
              label: '蔡海红',
            }, {
              value: '何平超',
              label: '何平超',
            }, {
              value: '蒋琦',
              label: '蒋琦',
            }, {
              value: '江杏灵',
              label: '江杏灵',
            }, {
              value: '梁惠群',
              label: '梁惠群',
            }, {
              value: '李静',
              label: '李静',
            }, {
              value: '林琳',
              label: '林琳',
            }, {
              value: '黎粤红',
              label: '黎粤红',
            }, {
              value: '罗志明',
              label: '罗志明',
            }, {
              value: '欧伟明',
              label: '欧伟明',
            }, {
              value: '叶丽雅',
              label: '叶丽雅',
            }, {
              value: '王丹妮',
              label: '王丹妮',
            }, {
              value: '杨丹',
              label: '杨丹',
            },
          ]
        },
        {
          value: '书刊借阅部',
          label: '书刊借阅部',
          children: [
            {
              value: '何彦雯',
              label: '何彦雯',
            }, {
              value: '陈智亮',
              label: '陈智亮',
            }, {
              value: '董慧明',
              label: '董慧明',
            }, {
              value: '杜汛章',
              label: '杜汛章',
            }, {
              value: '郭少婷',
              label: '郭少婷',
            }, {
              value: '黄广亨',
              label: '黄广亨',
            }, {
              value: '黄家浩',
              label: '黄家浩',
            }, {
              value: '何小文',
              label: '何小文',
            }, {
              value: '李彩尧',
              label: '李彩尧',
            }, {
              value: '梁浩然',
              label: '梁浩然',
            }, {
              value: '罗瑞莹',
              label: '罗瑞莹',
            }, {
              value: '梁淑琼',
              label: '梁淑琼',
            }, {
              value: '李婷',
              label: '李婷',
            }, {
              value: '刘文敏',
              label: '刘文敏',
            }, {
              value: '罗运祥',
              label: '罗运祥',
            }, {
              value: '欧阳长弟',
              label: '欧阳长弟',
            }, {
              value: '苏永勤',
              label: '苏永勤',
            }, {
              value: '谢洁兰',
              label: '谢洁兰',
            }, {
              value: '杨杰萍',
              label: '杨杰萍',
            }, {
              value: '杨倩瑜',
              label: '杨倩瑜',
            }, {
              value: '邹家琪',
              label: '邹家琪',
            }, {
              value: '张艳文',
              label: '张艳文',
            }, {
              value: '张子恺',
              label: '张子恺',
            }, {
              value: '张栩',
              label: '张栩',
            }, {
              value: '李添林',
              label: '李添林',
            },
          ]
        }, {
          value: '数字资源服务部',
          label: '数字资源服务部',
          children: [
            {
              value: '周小尧',
              label: '周小尧'
            }, {
              value: '陈振聪',
              label: '陈振聪'
            }, {
              value: '劳继勇',
              label: '劳继勇'
            }, {
              value: '肖科',
              label: '肖科'
            }, {
              value: '萧展明',
              label: '萧展明'
            }, {
              value: '周俊杰',
              label: '周俊杰'
            }, {
              value: '曾玉兰',
              label: '曾玉兰'
            },
          ]
        },
        {
          value: '图书采编部',
          label: '图书采编部',
          children: [
            {
              value: '洪筠',
              label: '洪筠',
            }, {
              value: '林家辉',
              label: '林家辉',
            }, {
              value: '梁丽君',
              label: '梁丽君',
            }, {
              value: '李佩珊',
              label: '李佩珊',
            }, {
              value: '卢杰',
              label: '卢杰',
            }, {
              value: '韦莉',
              label: '韦莉',
            }, {
              value: '吴曼菊',
              label: '吴曼菊',
            },
          ]
        },
        {
          value: '信息开发部',
          label: '信息开发部',
          children: [
            {
              value: '何锦辉',
              label: '何锦辉',
            }, {
              value: '陈建业',
              label: '陈建业',
            }, {
              value: '马张悦',
              label: '马张悦',
            }, {
              value: '古永亮',
              label: '古永亮',
            }, {
              value: '胡应文',
              label: '胡应文',
            }, {
              value: '罗丽华',
              label: '罗丽华',
            }, {
              value: '苏初升',
              label: '苏初升',
            }, {
              value: '周紫燕',
              label: '周紫燕',
            },
          ]
        },
        {
          value: '馆领导',
          label: '馆领导',
          children: [
            {
              value: '舒翔',
              label: '舒翔'
            }, {
              value: '卢应斌',
              label: '卢应斌'
            }, {
              value: '蔺梦华',
              label: '蔺梦华'
            }, {
              value: '冯清首',
              label: '冯清首'
            },
          ]
        },
        {
          value: '办公室',
          label: '办公室',
          children: [
            {
              value: '陈振宇',
              label: '陈振宇'
            }, {
              value: '董翠红',
              label: '董翠红'
            }, {
              value: '邓海莹',
              label: '邓海莹'
            }, {
              value: '黄锦生',
              label: '黄锦生'
            }, {
              value: '何铭志',
              label: '何铭志'
            }, {
              value: '卢少红',
              label: '卢少红'
            }, {
              value: '麦绮勤',
              label: '麦绮勤'
            }, {
              value: '文志坚',
              label: '文志坚'
            }, {
              value: '余志颖',
              label: '余志颖'
            },
          ]
        }

      ]
    }

  },
  methods: {
    async increaseBatchWorkAdd() {
      await increaseBatchWorkAdd(this.increaseBatchWorkForm, this.$store.state.project.id).then(resp => {
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
        this.increaseBatchWorkForm = {}
      })
      this.getItemData(this.$store.state.project.id)
      this.increaseBatchWork = false
    },
    async cancelConfirmWork(index, row) {
      await cancelConfirmWork(row.id, this.$store.state.project.id).then(resp => {
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
      })
      this.getItemData(this.$store.state.project.id)
      console.log('确定')
    },
    modifySingleWorkAdd() {
      modifySingleWorkAdd(this.modifySingleWorkForm.id, this.modifySingleWorkForm.trueName, this.modifySingleWorkForm.workType, this.modifySingleWorkForm.workContent, this.$store.state.project.id).then(resp => {
        console.log(resp)
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
        this.getItemData(this.$store.state.project.id)
        this.modifySingleWork = false

      })
    },
    modifyWorkMx(index, row) {

      this.modifySingleWorkForm.id = row.id
      this.modifySingleWorkForm.trueName = row.username
      this.modifySingleWorkForm.workType = row.project_person_type_name
      this.modifySingleWorkForm.workContent = row.work_content
      this.modifySingleWork = true
      // this.increaseSingleWork = true
      console.log(row)
    },
    increaseSingleWorkAdd() {
      increaseSingleWorkAdd(this.$store.state.project.id, this.increaseSingleWorkForm.trueName, this.increaseSingleWorkForm.workType, this.increaseSingleWorkForm.workContent).then(resp => {
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
        this.increaseSingleWorkForm = {}
      })
      this.getItemData(this.$store.state.project.id)
      this.increaseSingleWork = false
    },
    async cancelConfirm(index, row) {
      await cancelConfirm(row.id, this.$store.state.project.id).then(resp => {
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
      })
      this.getItemData(this.$store.state.project.id)
      // console.log('确定')
    },
    modifyMoneyMxAdd() {
      modifyMoneyMxAdd(this.modifyMoneyForm.id, this.modifyMoneyForm.applyMoney, this.modifyMoneyForm.introduce, this.$store.state.project.id).then(resp => {
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
        ElNotification({
          title: resp.data.message,
          message: resp.data.data,
        })
      })
      this.getItemData(this.$store.state.project.id)
      this.increaseMoney = false
    },
    getItemData(id) {
      getItemData(id).then(resp => {
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