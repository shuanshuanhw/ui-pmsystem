import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from '@/store/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import moment from 'moment'
// import '@/assets/styles/index.scss' // global css
// import '@/assets/styles/ruoyi.scss' // ruoyi css
// import '@/assets/styles/element-variables.scss'




// import './assets/icons' // icon
// import SvgIcon from '@/components/SvgIcon'// svg component
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)

// app.use(VueQuillEditor)
// app.use(SvgIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
