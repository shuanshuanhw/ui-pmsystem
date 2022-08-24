<template>
<div>
    <div class="button"><el-button @click="this.$router.back()"
          >返回</el-button> <el-button @click="next"
          >下一步</el-button></div>

    <div class="content">
        <el-form label-width="70px">
<el-form-item label="提议名">
      <el-input v-model="adviseName" />
    </el-form-item>
    
    <div style="border: 1px solid #ccc">

    
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
      <el-divider content-position="right">结束</el-divider>
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

      <el-divider content-position="right">结束</el-divider>
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


    
    </div></el-form>
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
  components: { Editor, Toolbar },
  setup() {

    const store = useStore()

    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()
    const editorRef2 = shallowRef()
    const editorRef3 = shallowRef()
    // 内容 HTML
    const valueHtml = ref('项目介绍：<br />')
    const valueHtml2 = ref('可行性分析：<br />')
    const valueHtml3 = ref('项目创新：<br />')
    const adviseName = ref('')
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
        newMainItem(adviseName._rawValue,valueHtml,valueHtml2,valueHtml3).then(resp=>{
            console.log(resp)
        })
    }
    return {
      adviseName,
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
<style scoped>
.button{
    text-align: right;
}
</style>