import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁',
      icon: 'i-mdi-home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '關於我',
      icon: 'i-mdi-account'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue'),
    meta: {
      title: '專案列表',
      icon: 'i-mdi-briefcase'
    }
  },
  {
    path: '/contract-bridge',
    name: 'ContractBridge',
    component: () => import('@/views/ContractBridge.vue'),
    meta: {
      title: '橋牌教學',
      icon: 'i-mdi-cards-playing-outline'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router