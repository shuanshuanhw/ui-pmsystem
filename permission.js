import router from '@/router'
import store from '@/store'
import { ElMessage,ElLoading } from 'element-plus'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { isRelogin } from '@/utils/request'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  // 如果是有找到cookie里面的token的
  // if (getToken()) {
  //   // 这个可能的意思是如果有title就把title放在vuex那里
  //   // to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
  //   /* has token*/
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     // if (store.getters.roles.length === 0) {
  //     //   isRelogin.show = true
  //     //   // 判断当前用户是否已拉取完user_info信息
  //     //   store.dispatch('GetInfo').then(() => {
  //     //     isRelogin.show = false
  //     //     store.dispatch('GenerateRoutes').then(accessRoutes => {
  //     //       // 根据roles权限生成可访问的路由表
  //     //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
  //     //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
  //     //     })
  //     //   }).catch(err => {
  //     //       store.dispatch('LogOut').then(() => {
  //     //         ElMessage.error(err)
  //     //         next({ path: '/' })
  //     //       })
  //     //     })
  //     // } else {
  //       // console.log('路由',to.path);
  //       next()
  //       NProgress.done()
  //     // }
  //   }
  // } else {
  //   // 如果没有找到cookie里面的token的
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     console.log('否则全部重定向到登录页');
  //     next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
  //     NProgress.done()
  //   }
  // }
  NProgress.done()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
