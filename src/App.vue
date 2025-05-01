<script setup lang="ts">
import { ref } from 'vue'
import Topbar from '@/components/layout/Topbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'

const showSidebar = ref(false)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const closeSidebar = () => {
  showSidebar.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Topbar @toggle-sidebar="toggleSidebar" />
    <Sidebar :is-open="showSidebar" @close="closeSidebar" />
    
    <main>
      <router-view v-slot="{ Component }">
        <transition 
          name="page" 
          mode="out-in"
          @before-leave="closeSidebar"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <footer class="py-8 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div class="container">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.
          </p>
          <div class="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <div class="i-carbon-logo-github text-xl"></div>
            </a>
            <a 
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <div class="i-carbon-logo-linkedin text-xl"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>