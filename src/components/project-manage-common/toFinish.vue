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
        class="upload-demo upload"
        action="/fallback/vue/project/upload/document" multiple 
        :on-preview="handlePreview"
        :on-remove="handleRemove" 
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.GIF,.BMP,.PNG"
        :headers="headerObj"
        list-type="picture-card"
        :on-exceed="handleExceed">
        
          <el-button>上传图片</el-button>
            <template #tip>
                <div class="el-upload__tip">
                    支持上传图片、视频、办公文档和压缩文件
                </div>
            </template>
        </el-upload>
        <!-- 上传文件 -->

        <!-- 主体内容 -->
    </div>
</template>

<script lang="ts" setup>
import { getToken } from '../../utils/auth'
import store from '../../store'
import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'
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
console.log('store.state.project.id',store.state.project.id)
const headerObj = {
    token:getToken(),
    projectId:store.state.project.id
}
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
     console.log(file, uploadFiles)
    // 確定刪除后，在這里數據庫同步刪除
    ElNotification.error({
          title: `${file.name} 已刪除`
        })
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log('kan')
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    // ElMessage.warning(
    //     `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
    //     } totally`
    // )
    ElNotification.error({
          title: `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
        })
}

// const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
//     return ElMessageBox.confirm(
//         `Cancel the transfert of ${uploadFile.name} ?`
//     ).then(
//         () => true,
//         () => false
//     )
// }

const beforeUpload: UploadProps['beforeUpload'] = (uploadFile) => {
    const fileSuffix = uploadFile.name.substring(uploadFile.name.lastIndexOf(".") + 1);
 // .jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.GIF,.BMP,.PNG
 const whiteList = ["jpg", "jpeg", "png", "gif", "bmp","JPG","JPEG","GIF","BMP","PNG"];

 if (whiteList.indexOf(fileSuffix) === -1) {
    ElNotification.error({
          title: '上传文件只能是 jpg, jpeg, png, gif, bmp格式'
        })
    // ElMessage.error('上传文件只能是 jpg, jpeg, png, gif, bmp格式');
   return false;
 }

 const isLt2M = uploadFile.size / 1024 / 1024 < 2;

//  if (!isLt2M) {
//     ElNotification.error({
//           title: '上传文件大小不能超过 2MB'
//         })
//     // ElMessage.error('上传文件大小不能超过 2MB');
//    return false;
// }
}
const onSuccess: UploadProps['onSuccess']= (response, uploadFile, uploadFiles) => {
    console.log(response)
    console.log(uploadFile.name,'成功上传')
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
<style scoped>
   .upload{
    text-align: right;
    width:99%;
    color:aqua;
    border: 1px solid ghostwhite;
    margin-top: 20px;
    padding: 5px;
   } 
</style>