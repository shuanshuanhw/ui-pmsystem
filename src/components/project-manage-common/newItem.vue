<template>
<div>
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
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
  </el-card>

      <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>提议简介</span>
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
        <span>提议创新</span>
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

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'
import {newMainItem} from '@/api/advise.js'

import { useStore } from 'vuex'

export default {
  data() {
    return {
        form:{
            projectName: ''
        }
    };
  },
  components: { Editor, Toolbar },
  setup() {
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
        setTimeout(() => {
            valueHtml.value = ''
        }, 1500)
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
    const next = () =>{
        console.log(adviseName._rawValue)
     //   store.commit('setNewAdvise',{adviseName: adviseName,introduce: valueHtml,feasibilityAnalyze: valueHtml2,innovation: valueHtml3});
        newMainItem(adviseName._rawValue,valueHtml._rawValue,valueHtml2._rawValue,valueHtml3._rawValue).then(resp=>{
            console.log(resp)
        })
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