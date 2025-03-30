import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Chart from 'chart.js/auto'
import { registerables } from 'chart.js'

// 注册Chart.js需要的组件
Chart.register(...registerables)

// 路由配置
const router = createRouter({
  history: createWebHistory('/CarbonWings/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/passenger',
      name: 'Passenger',
      component: () => import('./pages/Passenger.vue')
    },
    {
      path: '/enterprise',
      name: 'Enterprise',
      component: () => import('./pages/Enterprise.vue')
    },
    {
      path: '/government',
      name: 'Government',
      component: () => import('./pages/Government.vue')
    },
  ],
  // 添加滚动行为配置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  // 确保导航正常进行
  next()
})

// 添加全局解析守卫
router.beforeResolve((to, from, next) => {
  // 在组件解析之后导航之前
  next()
})

// 创建Pinia实例
const pinia = createPinia()

// 创建Vue应用实例
const app = createApp(App)

// 使用插件
app.use(router)
app.use(pinia)

// 添加全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue错误:', err, info)
}

// 挂载应用
app.mount('#app')