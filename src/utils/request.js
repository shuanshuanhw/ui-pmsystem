import axios from 'axios'
import { ElNotification, ElMessageBox, ElMessage, ElLoading } from 'element-plus'
// import store from '@/store'
import { getToken } from '../../src/utils/auth'
import errorCode from '../../src/utils/errorCode'
import { tansParams, blobValidate } from "../../src/utils/common";
import cache from '../../src/plugins/cache'
import { saveAs } from 'file-saver'
import router from '../router.js'
let downloadLoadingInstance;
// 是否显示重新登录
export let isRelogin = { show: false };

console.log('import.meta.env.VUE_APP_BASE_API',import.meta.env.VUE_APP_BASE_API)
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: '/fallback',
  headers: {'Cache-Control': 'no-cache'},
  // 超时
  timeout: 20*1000
})

// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  // const isToken = (config.headers || {}).isToken === false
  // 是否需要防止数据重复提交
  // const isRepeatSubmit = (config.headers || {}).repeatSubmit === false

  // if (getToken() && !isToken) {
    if (getToken()) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  // if (config.method === 'get' && config.params) {
  //   let url = config.url + '?' + tansParams(config.params);
  //   url = url.slice(0, -1);
  //   config.params = {};
  //   config.url = url;
  // }
  // if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
  //   const requestObj = {
  //     url: config.url,
  //     data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
  //     time: new Date().getTime()
  //   }
  //   const sessionObj = cache.session.getJSON('sessionObj')
  //   if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
  //     cache.session.setJSON('sessionObj', requestObj)
  //   } else {
  //     const s_url = sessionObj.url;                  // 请求地址
  //     const s_data = sessionObj.data;                // 请求数据
  //     const s_time = sessionObj.time;                // 请求时间
  //     const interval = 1000;                         // 间隔时间(ms)，小于此时间视为重复提交
  //     if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
  //       const message = '数据正在处理，请勿重复提交';
  //       console.warn(`[${s_url}]: ` + message)
  //       return Promise.reject(new Error(message))
  //     } else {
  //       cache.session.setJSON('sessionObj', requestObj)
  //     }
  //   }
  // }
  return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    // res.data.code是自己定义的，res.status才是后台系统设置的，
    const code = res.data.code || 2000;
    // 获取错误信息
     console.log('拦截器返回的数据',res)
     console.log('拦截器返回的数据',res.status)
    // debugger
    const msg = errorCode[code] || res.data.message || errorCode['default']
    // 二进制数据则直接返回
    if(res.request.responseType ===  'blob' || res.request.responseType ===  'arraybuffer'){
      return res.data
    }

    if(res.status !== 200)
    {
      
    }
    if (code !== 2000) {
        ElNotification.error({
          title: msg
        })
        if(msg == "帐号登陆过期，请重新登陆")
        {

          ElMessageBox.alert('录状态已过期，请重新登录', '系统提示', {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: '重新登录',
            showClose: false,
            // callback: (action: Action) => {
            //   ElMessage({
            //     type: 'info',
            //     message: `action: ${action}`,
            //   })
            // },
          }).then(() => {
            console.log('router',router)
            router.push('/login').catch(error => {
              console.log('跳转到登陆页的路由跳转不了',error)
            });
            console.log('message') 
            // location.href = '/login';
          }).catch((error) => {
            console.log(error)
          });

        //   ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
        //     confirmButtonText: '重新登录',
        //     cancelButtonText: '取消',
        //     type: 'warning'
        //   }
        // ).then(() => {
        //   console.log('router',router)
        //   router.push('/login').catch(error => {
        //     console.log('跳转到登陆页的路由跳转不了',error)
        //   });
        //   console.log('message') 
        //   // location.href = '/login';
        // }).catch((error) => {
        //   console.log(error)
        // });
        }
        return Promise.reject(res)
      } 

    // 这里如果不返回的话，前端就取不到数据了
    return res;
    // if (code === 401) {
    //   if (!isRelogin.show) {
    //     isRelogin.show = true;
    //     ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }
    //   ).then(() => {
    //     isRelogin.show = false;
    //     // store.dispatch('LogOut').then(() => {
    //     //   location.href = '/index';
    //     // })
    //   }).catch(() => {
    //     isRelogin.show = false;
    //   });
    // }
    //   return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    // } 
    // else if (code === 500) {
    //   Message({
    //     message: msg,
    //     type: 'error'
    //   })
    //   return Promise.reject(new Error(msg))
    // } 
    // else if (code !== 200) {
    //   ElNotification.error({
    //     title: msg
    //   })
    //   if(msg == "帐号登陆过期，请重新登陆")
    //   {
        
    //     ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }
    //   ).then(() => {
    //     // isRelogin.show = false;
    //     // store.dispatch('LogOut').then(() => {
    //     //   location.href = '/index';
    //     // })
    //     console.log('router',router)
    //     router.push('/login').catch((error) => {
    //       console.log('跳转到登陆页的路由跳转不了',error)
    //     });
    //     console.log('message') 
    //     // location.href = '/login';
    //   }).catch((error) => {
    //     console.log(error)
    //   });
    //   }
    //   return Promise.reject(res.data)
    // } 
    // else {
    //   return res.data
    // }
  },
  // error => {
  //   // 超出 2xx 范围的状态码都会触发该函数。
  //   // 对响应错误做点什么
  //   console.log('err: ' + error)
  //   let { message } = error;
  //   console.log('message',message)
  //   if (message == "Network Error") {
  //     message = "后端接口连接异常";
  //   }
  //   else if (message.includes("timeout")) {
  //     message = "系统接口请求超时";
  //   }
  //   else if (message.includes("Request failed with status code")) {
  //     message = "系统接口" + message.substr(message.length - 3) + "异常";
  //   }
  //   else if(message == "帐号登陆过期，请重新登陆")
  //   {
  //     console.log('message')
  //     MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
  //       confirmButtonText: '重新登录',
  //       cancelButtonText: '取消',
  //       type: 'warning'
  //     }
  //   ).then(() => {
  //     // isRelogin.show = false;
  //     // store.dispatch('LogOut').then(() => {
  //     //   location.href = '/index';
  //     // })
  //     this.$router.push('/index')
  //   }).catch(() => {
  //     isRelogin.show = false;
  //   });
  //   }
  //   ElMessage({
  //     message: message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   })
  //   console.log(message)
  //   return Promise.reject(error)
  // }
)

// 通用下载方法
export function download(url, params, filename) {
  downloadLoadingInstance = ElLoading.service({ text: "正在下载数据，请稍候", spinner: "el-icon-loading", background: "rgba(0, 0, 0, 0.7)", })
  return service.post(url, params, {
    transformRequest: [(params) => { return tansParams(params) }],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'blob'
  }).then(async (data) => {
    const isLogin = await blobValidate(data);
    if (isLogin) {
      const blob = new Blob([data])
      saveAs(blob, filename)
    } else {
      const resText = await data.text();
      const rspObj = JSON.parse(resText);
      const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
      Message.error(errMsg);
    }
    downloadLoadingInstance.close();
  }).catch((r) => {
    console.error(r)
    Message.error('下载文件出现错误，请联系管理员！')
    downloadLoadingInstance.close();
  })
}

export default service
