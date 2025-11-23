<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const route = useRoute()
</script>

<template>
  <div>
    <!-- Backdrop -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-gray-900/60 z-40 md:hidden transition-opacity duration-300"
      @click="$emit('close')"
    ></div>
    
    <!-- Sidebar -->
    <aside 
      class="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transition-transform duration-300 transform md:translate-x-0 md:static md:h-auto md:shadow-none"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex flex-col h-full p-4">
        <!-- Mobile: Close button -->
        <div class="flex justify-end md:hidden">
          <button 
            class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            @click="$emit('close')"
            aria-label="Close menu"
          >
            <div class="i-mdi-close text-lg"></div>
          </button>
        </div>
        
        <!-- User avatar -->
        <div class="flex flex-col items-center py-8 border-b border-gray-200 dark:border-gray-700">
          <div class="w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900 mb-4 overflow-hidden">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Profile" class="w-full h-full object-cover" />
          </div>
          <h2 class="text-xl font-bold">Azusa Lo</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400">網頁開發者</p>
        </div>
        
        <!-- Nav links -->
        <nav class="flex-1 py-6">
          <ul class="space-y-2">
            <li v-for="item in $router.options.routes" :key="item.path">
              <router-link 
                :to="item.path" 
                class="flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                :class="{ 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400': route.path === item.path }"
                @click="$emit('close')"
              >
                <div :class="item.meta?.icon" class="mr-3"></div>
                {{ item.meta?.title }}
              </router-link>
            </li>
          </ul>
        </nav>
        
        <!-- Social links -->
        <div class="py-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex justify-center space-x-4">
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <div class="i-mdi-github text-lg"></div>
            </a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <div class="i-mdi-linkedin text-lg"></div>
            </a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <div class="i-mdi-twitter text-lg"></div>
            </a>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>