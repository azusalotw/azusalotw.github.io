<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const scrollPosition = ref(0)

const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      scrollPosition > 20 ? 
        'bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md py-3' : 
        'bg-transparent py-5'
    ]"
  >
    <div class="container flex items-center justify-between">
      <router-link to="/" class="text-xl font-bold text-primary-600 dark:text-primary-400">
        Portfolio
      </router-link>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <router-link 
          v-for="item in [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' }
          ]"
          :key="item.name"
          :to="item.path"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          active-class="text-primary-600 dark:text-primary-400 font-medium"
        >
          {{ item.name }}
        </router-link>
        
        <button 
          @click="toggleTheme" 
          class="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <div v-if="isDark" class="i-carbon-sun text-yellow-400"></div>
          <div v-else class="i-carbon-moon text-gray-700"></div>
        </button>
      </nav>
      
      <!-- Mobile menu button -->
      <button 
        @click="$emit('toggle-sidebar')" 
        class="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle menu"
      >
        <div class="i-carbon-menu text-gray-700 dark:text-gray-300"></div>
      </button>
    </div>
  </header>
</template>