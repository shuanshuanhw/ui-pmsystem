import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。

const routes = [
  { 
  path: '/', 
  component: ()=>import('@/components/login.vue')  
  },
  {
    path: '/vue/profile',
    component: ()=>import('@/components/myseft')
  },
  { 
    path: '/index', 
    component: () => import('@/components/index.vue'),
    children:[
      {
        path:"",
        name: "",
        redirect: 'index/index'
        
      },
      {
        path:'function-evaluation',
        name: "function-evaluation",
        meta:{keepAlive: true},
        component: () => import('@/components/function-evaluation')
      },
      {
        path:'function-money',
        meta:{keepAlive: true},
        component: () => import('@/components/function-money')
      },
      {
        path:'function-date',
        meta:{keepAlive: true},
        component: () => import('@/components/function-date')
      },
      {
        path:'function-user',
        meta:{keepAlive: true},
        component: () => import('@/components/function-user')
      },
      {
        path:'finish',
        meta:{keepAlive: true},
        component: () => import('@/components/finish-manage')
      },
      {
        path:'advise',
        meta:{keepAlive: true},
        component: () => import('@/components/advise-manage')
      },
      {
        path:'project',
        meta:{keepAlive: true},
        component: () => import('@/components/project-manage')
      },
      {
        path: 'index',
        name: 'index',
        meta:{keepAlive: true},
        component: ()=>import('@/components/Index2/index.vue')  
      }
      ,
      {
        path: 'advise-common',
        name: 'advise-common',
        meta:{keepAlive: true},
        component: ()=>import('@/components/advise-manager-common')  
      },
      {
        path: 'advise-common-item',
        name: 'advise-common-item',
        meta:{keepAlive: true},
        component: ()=>import('@/components/advise-manager-common/item')  
      },
      {
        path: 'advise-common-newItem',
        name: 'advise-common-newItem',
        meta:{keepAlive: false},
        component: ()=>import('@/components/advise-manager-common/newItem')  
      }
      ,
      {
        path: 'project-common-newItem',
        name: 'project-common-newItem',
        meta:{keepAlive: false},
        component: ()=>import('@/components/project-manage-common/newItem')  
      },{
        path: 'project-common-Item',
        name: 'project-common-Item',
        meta:{keepAlive: true},
        component: ()=>import('@/components/project-manage-common/Item')  
      },{
        path: 'project-common',
        name: 'project-common',
        meta:{keepAlive: true},
        component: ()=>import('@/components/project-manage-common')  
      },
      {
        path: 'finish-common',
        name: 'finish-common',
        meta:{keepAlive: true},
        component: ()=>import('@/components/finish-manage-common')  
      }
    ]
  },
  
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router