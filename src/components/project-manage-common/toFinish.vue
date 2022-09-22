<template>
    <div>
        <div class="button">
            <el-button @click="this.$router.back()">返回</el-button>
            <el-button @click="next">提交</el-button>
        </div>
        <el-divider></el-divider>

        <!-- 主体内容 -->
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>项目绩效</span>
                    <el-form :model="form" label-width="120px">
                        <el-form-item label="项目名">
                            <el-input v-model="name" readonly />
                        </el-form-item>
                    </el-form>
                    <!-- <el-button class="button" text>Operation button</el-button> -->
                </div>
            </template>
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                :mode="mode" />
            <Editor style="font-size: 18px;min-height: 100px; overflow-y: hidden;text-align: left;" v-model="valueHtml"
                :mode="mode" @onCreated="handleCreated" />
        </el-card>

        <!-- 上传文件 -->
        <el-upload 
        name="file" 
        v-model:file-list="fileList" 
        class="upload-demo"
        action="/fallback/vue/project/upload/document" multiple 
        :on-preview="handlePreview"
        :on-remove="handleRemove" 
        :before-remove="beforeRemove" 
        :limit="3"
        :headers="headerObj"
        :on-exceed="handleExceed">
            <el-button type="primary">Click to upload</el-button>
            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
        </el-upload>
        <!-- 上传文件 -->

        <!-- 主体内容 -->
    </div>
</template>
<script lang="ts" setup>
import { getToken } from '../../utils/auth'
import { ElMessage, ElMessageBox } from 'element-plus'
import { UploadProps, UploadUserFile } from 'element-plus'
import { getCurrentInstance, onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// 上傳模塊的
const fileList = ref<UploadUserFile[]>([
    //   {
    //     name: 'element-plus-logo.svg',
    //     url: 'https://element-plus.org/images/element-plus-logo.svg',
    //   },
    //   {
    //     name: 'element-plus-logo2.svg',
    //     url: 'https://element-plus.org/images/element-plus-logo.svg',
    //   },
])

const headerObj = {
    token:getToken()
}
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfert of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}
// 上傳模塊的
const form = {}
const name = ref('')
const mode = ref('simple')
const editorRef = shallowRef()
const valueHtml = ref('')
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
            menuKeys: ["justifyLeft", "justifyCenter", "justifyRight", "justifyJustify"] // 下级菜单 key ，必填
        },
        "undo",
        "clearStyle",
    ]

}


const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {
        justifyLeft: true
    },
    scroll: false,


    // readOnly: true
}
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}
const next = () => {

}

</script>