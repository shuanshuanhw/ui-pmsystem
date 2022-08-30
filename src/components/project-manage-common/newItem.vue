<template>
<div>
    <!-- 规则弹窗 -->
  <el-dialog
    v-model="dialogVisible"
    title=""
    width="98%"
    :show-close="false"
  >
    <div>
        <H3>项目立项客观信息规则参照表</H3>
<table width="100%" border="1" class="am-table am-table-bordered">
    <thead>
    <tr class="am-success">
        <th class="am-table-bordered " colspan="4">类别 </th>
        <th class="table-title" style="color: #bd362f;">A级</th>
        <th style="color: #0e90d2;">B级 </th>
        <th style="color: #5eb95e;">C级 </th>
        <th style="color: orange;">D级 </th>
    </tr>
    </thead>
    <tbody>

    <tr>
        <th  rowspan="4" style="background-color: #A3C6C8;">读者活动类 </th>
        <th rowspan="3">规模 </th>
        <th  colspan="2">省级及以上的大型读者活动 </th>
        <th >承办 </th>
        <th >承办 </th>
        <th >协办 </th>
        <th >参与 </th>
    </tr>
    <tr>
        <th  colspan="2">市级的读者 <br>
            活动 </th>
        <th >承办 </th>
        <th >承办 </th>
        <th >协办 </th>
        <th >参与 </th>
    </tr>
    <tr>
        <th  colspan="2">区级的读者 <br>
            活动 </th>
        <th >主办/承办 </th>
        <th >主办/承办 </th>
        <th >承办 </th>
        <th >协办 </th>
    </tr>
    <tr>
        <th  colspan="3">场次/参与人次 </th>
        <th >不少于40场；或总人次不少于1200 </th>
        <th >不少于20场；或总人次不少于1000 </th>
        <th >不少于8场，且每场不少于60人；或总人次不少于600 </th>
        <th >不少于3场，且每场不少于30人；或总人次不少于150 </th>
    </tr>
    <tr>
        <th style="background-color: #C0EBEF;">展览类 </th>
        <th  colspan="3">讲座参与人数<br>
            /镇街巡展 </th>
        <th >讲座不少于3场,且总人次不少于500;或馆外巡展不少于3场 </th>
        <th >讲座不少于2场,且总人次不少于300;或馆外巡展不少于2场 </th>
        <th >讲座不少于1场,且总人次不少于100;或馆外巡展不少于1场 </th>
        <th >/</th>
    </tr>
    <tr>
        <th style="background-color: wheat;">宣传推广类 </th>
        <th  colspan="3">媒体</th>
        <th >国家级新闻媒体发布</th>
        <th >省级新闻媒体发布</th>
        <th >市级新闻媒体发布</th>
        <th >区级新闻媒体发布</th>
    </tr>
    <tr>
        <th  rowspan="5" style="background-color: #a9dba9;">学术活动类 </th>
        <th  colspan="3">省级及以上会议 </th>
        <th >主办/承办 </th>
        <th >主办/承办 </th>
        <th >/</th>
        <th >/</th>
    </tr>
    <tr>
        <th  colspan="3">市级会议 </th>
        <th >主办/承办 </th>
        <th >主办/承办 </th>
        <th >/</th>
        <th >/</th>
    </tr>
    <tr>
        <th  colspan="3">区级会议 </th>
        <th >/</th>
        <th >主办 </th>
        <th >主办 </th>
        <th >承办 </th>
    </tr>
    <tr>
        <th  colspan="3">馆内会议 </th>
        <th >/</th>
        <th >/</th>
        <th >主办 </th>
        <th >主办 </th>
    </tr>
    <tr>
        <th  colspan="3">规模 </th>
        <th >200人以上 </th>
        <th >100-200人 </th>
        <th >50-100人 </th>
        <th >50人以内 </th>
    </tr>
    <tr>
        <th  rowspan="3" style="background-color: #bfbfbf;">业务提升类 </th>
        <th  colspan="3">业务范围 </th>
        <th >省级及以上业务（有省级及以上文件）</th>
        <th >市级业务（有市级文件）</th>
        <th >区级业务（有区级文件）</th>
        <th >全馆业务（经馆领导审批）</th>
    </tr>
    <tr>
        <th  colspan="3">重要程度 </th>
        <th >极其重要 </th>
        <th >重要 </th>
        <th >比较重要 </th>
        <th >一般 </th>
    </tr>
    <tr>
        <th  colspan="3">操作难度 </th>
        <th >难 </th>
        <th >较难 </th>
        <th >中等 </th>
        <th >一般 </th>
    </tr>
    <tr>
        <th  rowspan="4" style="background-color: #BEE9F0;">技术研发类 </th>
        <th width="70" colspan="2" rowspan="2">研 <br>
            发 <br>
            类 </th>
        <th width="85">版权 </th>
        <th >自主产权、 <br>
            共同产权 </th>
        <th >合作开发、共同产权 </th>
        <th >参与开发、无产权 </th>
        <th >一般参与开发、无产权 </th>
    </tr>
    <tr>
        <th width="85">用户满意度 </th>
        <th >不低于80%</th>
        <th >不低于70% </th>
        <th >不低于60% </th>
        <th >不低于60% </th>
    </tr>
    <tr>
        <th width="70" colspan="2" rowspan="2">其他技术类 </th>
        <th width="85">重要程度 </th>
        <th >极其重要 </th>
        <th >重要 </th>
        <th >比较重要 </th>
        <th >一般 </th>
    </tr>
    <tr>
        <th width="85">难度 </th>
        <th >难 </th>
        <th >较难 </th>
        <th >中等 </th>
        <th >一般 </th>
    </tr>
    <tr>
        <th style="background-color: #ebebeb;" rowspan="3">其他 </th>
        <th colspan="3">工作范围 </th>
        <th colspan="4">馆级及以上工作任务 </th>
    </tr>
    <tr>
        <th colspan="3">重要程度</th>

        <th>极其重要</th>
        <th>重要</th>
        <th>比较重要</th>
        <th>一般</th>
    </tr>

    <tr>
        <th colspan="3">难度</th>
        <th>难</th>
        <th>较难</th>
        <th>中等</th>
        <th>一般</th>
    </tr>

    <tr class="am-success">
        <th class="am-table-bordered " colspan="4">类别 </th>
        <th class="table-title" style="color: #bd362f;">A级</th>
        <th style="color: #0e90d2;">B级 </th>
        <th style="color: #5eb95e;">C级 </th>
        <th style="color: orange;">D级 </th>
    </tr>
    <tr>
        <th colspan="8" style="text-align: left;" valign="top">说明： <br>
                1、项目申报时对类别和级别进行申报，立项后不可修改类别，结项时由项目绩效管理小组评定级别。 <br>
                2、展览类项目须另设讲座或镇街巡展（D级除外）。 <br>
                3、用户满意度采用纸质问卷或网络问卷调查均可，回收的有效问卷数量需大于30份。 <br>
                4、技术研发类（研发类）不受跨部门及人员限制。 <br>
                5、技术研发类在项目结项时需现场演示佐证。 <br>
                6、项目负责人不得多于3人。 <br>
                7、结项时须提供相关佐证材料。 </th>
    </tr>
    </tbody>
</table>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        > -->
      </span>
    </template>
  </el-dialog>
    <!-- 规则弹窗 -->
        <el-divider content-position="left">功能区</el-divider>
    <div class="button"><el-button @click="this.$router.back()"
          >返回</el-button> <el-button @click="next"
          >下一步</el-button></div>
<el-divider></el-divider>

    <div class="content">
    <div style="">

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>基本资料</span>
        <el-button class="button" @click="projectName=''" text>清除内容</el-button>
      </div>
    </template>

  <el-form :model="form" label-width="120px">
    <el-form-item label="项目名">
      <el-input v-model="form.projectName" />
    </el-form-item>
    <el-form-item label="项目类型">
      <el-select  v-model="form.projectType" @change="projectTypeChange" placeholder="">
          <el-option
      v-for="item in projectTypeList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
      </el-select>

    </el-form-item>
        <el-form-item label="项目自预测级别">
      <el-select v-model="form.projectTank" @change="projectTankChange" placeholder="">
          <el-option
      v-for="item in projectTankList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
      </el-select>
      <el-button text v-if="ifObject"  @click="getObjectList"
    >获取客观信息列表</el-button>
    </el-form-item>
        <el-form-item label="项目客观信息">
      <el-select v-model="form.projectObjective" placeholder="">
          <el-option
      v-for="item in projectObjectiveList"
      :key="item.project_askfor_name"
      :label="item.project_askfor_name"
      :value="item.project_askfor_name"
    />
      </el-select> 
      
      <el-button text @click="dialogVisible = true"
    >点击查看规则</el-button
  >
    </el-form-item>




        <el-form-item label="申请部门">
      <el-select v-model="form.projectDepartment" placeholder="">
          <el-option
      v-for="item in projectDepartmentList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
      </el-select>
    </el-form-item>


    <el-form-item label="项目周期">
      <el-col :span="11">
        <el-date-picker
          v-model="form.projectStartDate"
          type="date"
          placeholder="选择项目开始时间"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-date-picker
          v-model="form.projectEndDate"
          type="date"
          placeholder="选择项目结束时间"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>

    <el-form-item label="项目创建人的工作明细">
      <el-input v-model="form.workMx" type="textarea" />
    </el-form-item>


  </el-form>
  </el-card>

      <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>项目简介</span>
        <el-button class="button" @click="valueHtml=''" text>清除内容</el-button>
      </div>
    </template>
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
  </el-card>


    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>可行性分析</span>
<el-button class="button" @click="valueHtml2=''" text>清除内容</el-button>
      </div>
    </template>
 <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef2"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="valueHtml2"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated2"
      />
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>项目创新</span>
        <el-button class="button" @click="valueHtml3=''" text>清除内容</el-button>
      </div>
    </template>
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef3"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="valueHtml3"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated3"
      />
  </el-card>
    </div>
    </div>
</div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { getCurrentInstance,onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'
// import {newMainItem} from '@/api/advise.js'

import {getObjectList,newMainItem} from '@/api/project.js'

import { useStore } from 'vuex'

export default {
  computed: {
  },
  watch: {

  },
  data() {
    return {
        dialogVisible:false,
        ifObject: false,
        form:{
            projectName: '',
            projectType: '',
            projectObjective: '',
            projectTank: '',
            projectDepartment: '',
            projectStartDate: '',
            projectEndDate: '',
            workMx:''
        },
        projectTypeList:[
                
                     {
    value: '读者活动类',
    label: '读者活动类',
  },{
    value: '宣传推广类',
    label: '宣传推广类',
  },{
    value: '学术活动类',
    label: '学术活动类',
  },{
    value: '展览类',
    label: '展览类',
  },{
    value: '业务提升类',
    label: '业务提升类',
  },{
    value: '技术研发类_研发类',
    label: '技术研发类_研发类',
  },{
    value: '技术研发类_其他技术类',
    label: '技术研发类_其他技术类',
  },{
    value: '其他类',
    label: '其他类',
  },
                
            ],
            projectObjectiveList:[],
            projectTankList:[
              {
    value: 'A级',
    label: 'A级',
  },{
    value: 'B级',
    label: 'B级',
  },{
    value: 'C级',
    label: 'C级',
  },{
    value: 'D级',
    label: 'D级',
  },],
            projectDepartmentList:[]
    };
  },
  created(){
    console.log('localStorage.getItem(user)',localStorage.getItem('department'))
    this.projectDepartmentList.push({value:'发展研究会',label:'发展研究会'})
    this.projectDepartmentList.push({value:localStorage.getItem('department'),label:localStorage.getItem('department')})
  },
  methods:{
    getObjectList(){
      getObjectList(this.projectType,this.projectTank).then(resp=>{
        console.log(resp.data.data)
        if(resp.data.flag)
        {
          this.projectObjectiveList = resp.data.data
        }
      })
    },
    projectTypeChange(e){
      this.projectType = e
      console.log('this.projectTank',this.projectTank)
      if(this.projectTank !== undefined)
      this.ifObject = true
      else
      this.ifObject = false
    },
    projectTankChange(e){
      this.projectTank = e
      console.log('this.projectType',this.projectType)
      if(this.projectType !== undefined)
      this.ifObject = true
      else
      this.ifObject = false
    }
  },
  components: { Editor, Toolbar },
  setup(props,ctx) {
    const store = useStore()

    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()
    const editorRef2 = shallowRef()
    const editorRef3 = shallowRef()
    // 内容 HTML
    const valueHtml = ref('')
    const valueHtml2 = ref('')
    const valueHtml3 = ref('')
    // 模拟 ajax 异步获取内容
    onMounted(() => {
    })

    const toolbarConfig = {
toolbarKeys: [
"bold",
"fontSize",
"lineHeight",
"color",
"bgColor",
"indent",
"delIndent",
// 菜单组，包含多个菜单
{
  key: 'group-align-style', // 必填，要以 group 开头
  title: '对齐方式', // 必填
  menuKeys: ["justifyLeft", "justifyCenter", "justifyRight","justifyJustify"] // 下级菜单 key ，必填
},
// {
//   key: 'group-title-style', // 必填，要以 group 开头
//   title: '标题', // 必填
//   menuKeys: ["header1", "header2", "header3","header4","header5"] // 下级菜单 key ，必填
// },
"undo",
"clearStyle",
]

    }

    const editorConfig = { 
        // placeholder: '请输入内容...',
        MENU_CONF:{
            justifyLeft: true
        },
        scroll: false,
        MENU_CONF: {

        }
    
        // readOnly: true
         }


    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
        editorRef.value = editor // 记录 editor 实例，重要！
    }
    const handleCreated2 = (editor) => {
        editorRef2.value = editor // 记录 editor 实例，重要！
    }
    const handleCreated3 = (editor) => {
        editorRef3.value = editor // 记录 editor 实例，重要！
    }

    const datab = getCurrentInstance();
        
    const next = () =>{
    console.log('valueHtml',valueHtml)
        newMainItem(datab.data.form.projectName,datab.data.form.projectType,datab.data.form.projectObjective,datab.data.form.projectTank,datab.data.form.projectDepartment,datab.data.form.projectStartDate,datab.data.form.projectEndDate,datab.data.form.workMx,valueHtml._rawValue,valueHtml2._rawValue,valueHtml3._rawValue).then(resp=>{
            console.log(resp)
        })
      
        console.log('projectName',datab.data)
    }
    return {
      editorRef,
      editorRef2,
      editorRef3,
      valueHtml,
      valueHtml2,
      valueHtml3,
      mode: 'simple', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      handleCreated2,
      handleCreated3,
      next
    };
  }
}
</script>