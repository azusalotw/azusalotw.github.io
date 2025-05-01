import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import routes from '@/router'

// Create router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')