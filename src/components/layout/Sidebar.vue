<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useRouter } from 'vue-router'

const { isDark, toggleTheme } = useTheme()
const router = useRouter()

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

// Close sidebar when route changes
watch(() => router.currentRoute.value, () => {
  emit('close')
})
</script>

<template>
  <div 
    class="fixed inset-0 z-50 md:hidden"
    v-if="isOpen"
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-all duration-300"
      @click="$emit('close')"
    ></div>
    
    <!-- Sidebar content -->
    <div class="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-all duration-300">
      <div class="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
        <h2 class="font-semibold text-gray-900 dark:text-white">Menu</h2>
        <button 
          @click="$emit('close')" 
          class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close menu"
        >
          <div class="i-carbon-close text-gray-700 dark:text-gray-300"></div>
        </button>
      </div>
      
      <nav class="p-4">
        <ul class="space-y-2">
          <li v-for="item in navItems" :key="item.name">
            <router-link 
              :to="item.path" 
              class="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              active-class="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      
      <div class="p-4 mt-auto border-t border-gray-200 dark:border-gray-800">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600 dark:text-gray-400">
            Theme
          </span>
          <button 
            @click="toggleTheme" 
            class="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <div v-if="isDark" class="i-carbon-sun text-yellow-400"></div>
            <div v-else class="i-carbon-moon text-gray-700"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>