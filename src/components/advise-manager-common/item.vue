<template>
<div>
    <!-- item <a @click="$router.back()">aaa</a> -->
            <el-button size="small" type="danger" @click="this.$router.back()"
          >返回</el-button>

  <el-descriptions title="提议明细" :column="2" border>
    <el-descriptions-item
      label="提议名称"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      
      >{{adviseName}}</el-descriptions-item
    >
    <el-descriptions-item label="提议状态" label-align="right" align="center"
      >{{state}}</el-descriptions-item
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
        <span>提议简介</span>
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
      

    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>

<!-- <div v-html="valueHtml" style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;"></div> -->
</div>
</template>
<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {getItemData} from '@/api/advise.js'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'


export default {
    components: { Editor, Toolbar },
    data() {
        return {
            adviseName: '',
            introduce: '',
            feasibilityAnalyze: '',
            innovation: '',
            defaultTime: '',
            userName: '',
            projectName: '',
            state:'',
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
                if(resp.data.flag)
                {
                    this.adviseName = resp.data.data.advice_name
                    this.introduce = resp.data.data.introduce
                    this.feasibilityAnalyze = resp.data.data.feasibility_analyze
                    this.innovation = resp.data.data.innovation

                    this.defaultTime = resp.data.data.default_time
                    this.userName = resp.data.data.admin
                    this.projectName = resp.data.data.project_name
                    this.state = resp.data.data.project_submit_state_name
    
                }
            })
        }
    },
//   updated(){
//     // this.getItemData(this.$store.state.id)
// console.log('updated',this.$store.state.id) 
//   },
  created() {
    this.getItemData(this.$store.state.id)
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
.box-card {
  width: 100%;
  padding:0;
  margin-top: 10px;
}
.my-label {
  background: var(--el-color-success-light-9);
}
.my-content {
  background: var(--el-color-danger-light-9);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>