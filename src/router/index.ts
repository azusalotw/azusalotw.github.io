import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Portfolio from '@/views/Portfolio.vue'
import Skills from '@/views/Skills.vue'
import Contact from '@/views/Contact.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      icon: 'i-mdi-home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Me',
      icon: 'i-mdi-account'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio',
      icon: 'i-mdi-briefcase'
    }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: {
      title: 'Skills',
      icon: 'i-mdi-code-tags'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact',
      icon: 'i-mdi-email'
    }
  }
]

export default routes