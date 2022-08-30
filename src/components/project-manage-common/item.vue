<template>
<div>
    <el-divider content-position="left">功能区</el-divider>
    <div class="button"><el-button  @click="this.$router.back()"
          >返回</el-button></div>
            
<el-divider></el-divider>
  <el-descriptions  :column="2" border>
    <el-descriptions-item
      label="提议名称"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      >{{adviseName}}</el-descriptions-item>
    <el-descriptions-item label="提议状态" label-align="right" align="center"
      >
      <el-tag class="ml-2" type="info">{{state}}</el-tag>
     
      
      </el-descriptions-item
    >
    <el-descriptions-item label="提交时间" label-align="right" align="center"
      >{{defaultTime}}</el-descriptions-item
    >
    <el-descriptions-item label="提交人" label-align="right" align="center">
      {{userName}}
    </el-descriptions-item>
    <el-descriptions-item label="关联工程" label-align="right" align="center"
      >{{projectName}}</el-descriptions-item
    >
  </el-descriptions>

      <el-card class="box-card">

            <template #header>
      <div class="card-header">
        <span>项目简介</span>
      </div>
    </template>


<Editor
        style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="introduce"
      /></el-card>
<el-card class="box-card">

    <template #header>
      <div class="card-header">
        <span>可行性分析</span>
      </div>
    </template>

      <Editor
        style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="feasibilityAnalyze"
      />
</el-card>
  <el-card class="box-card">

        <template #header>
      <div class="card-header">
        <span>项目创新</span>
      </div>
    </template>


<Editor
        style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"
        v-model="innovation"
      />
  </el-card>
      

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
import {getItemData} from '@/api/project.js'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'


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
            state:'',
            opinion: []
        }
            
    },
    // setup() {
    // // 编辑器实例，必须用 shallowRef
    // const editorRef = shallowRef()

    // // 内容 HTML
    // const valueHtml = ref('<p></p>')

    // // 模拟 ajax 异步获取内容
    // onMounted(() => {
    //     // setTimeout(() => {
    //     //     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    //     // }, 1500)
    // })

    // const toolbarConfig = {}
    // const editorConfig = { placeholder: '' }

    // // 组件销毁时，也及时销毁编辑器
    // onBeforeUnmount(() => {
    //     const editor = editorRef.value
    //     if (editor == null) return
    //     editor.destroy()
    // })

    // const handleCreated = (editor) => {
    //   editorRef.value = editor // 记录 editor 实例，重要！
    // }

    // return {
    //   editorRef,
    //   valueHtml,
    //   mode: 'default', // 或 'simple'
    //   toolbarConfig,
    //   editorConfig,
    //   handleCreated
    // };
    //         },
    methods:{
        getItemData(id)
        {
            getItemData(id).then(resp=>{
                console.log(resp)
                // if(resp.data.flag)
                // {
                //     this.adviseName = resp.data.data.advice.advice_name
                //     this.introduce = resp.data.data.advice.introduce
                //     this.feasibilityAnalyze = resp.data.data.advice.feasibility_analyze
                //     this.innovation = resp.data.data.advice.innovation

                //     this.defaultTime = resp.data.data.advice.default_time
                //     this.userName = resp.data.data.advice.admin
                //     this.projectName = resp.data.data.advice.project_name
                //     this.state = resp.data.data.advice.project_submit_state_name

                //     this.opinion = resp.data.data.opinion;
                // }
            })
        }
    },
//   updated(){
//     // this.getItemData(this.$store.state.id)
// console.log('updated',this.$store.state.id) 
//   },
  created() {
    this.getItemData(this.$store.state.project.id)
    // props 会暴露到 `this` 上
    console.log('created',this.$store.state.project.id) 
  },
  beforeRouteLeave(to,from,next)
  {
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