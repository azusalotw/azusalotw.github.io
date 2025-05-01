<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Footer from '@/components/layout/Footer.vue'

const isSidebarOpen = ref(false)
const isDarkMode = ref(false)
const route = useRoute()

// Toggle sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Close sidebar when route changes
watch(() => route.path, () => {
  isSidebarOpen.value = false
})

// Check system preference for dark mode
onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
  
  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    isDarkMode.value = e.matches
    toggleDarkMode()
  })
})

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Navbar 
      :is-sidebar-open="isSidebarOpen" 
      :is-dark-mode="isDarkMode"
      @toggle-sidebar="toggleSidebar" 
      @toggle-dark-mode="toggleDarkMode" 
    />
    
    <div class="flex flex-1">
      <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
      
      <main class="flex-1">
        <router-view v-slot="{ Component }">
          <transition 
            name="page" 
            mode="out-in"
            appear
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
    
    <Footer />
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

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
}
</style>