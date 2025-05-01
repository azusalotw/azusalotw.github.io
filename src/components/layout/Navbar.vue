<script setup lang="ts">
defineProps<{
  isSidebarOpen: boolean
  isDarkMode: boolean
}>()

defineEmits<{
  (e: 'toggleSidebar'): void
  (e: 'toggleDarkMode'): void
}>()
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="container h-16 flex items-center justify-between">
      <!-- Mobile menu toggle -->
      <button 
        class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        @click="$emit('toggleSidebar')"
        aria-label="Toggle menu"
      >
        <div v-if="!isSidebarOpen" class="i-mdi-menu text-lg"></div>
        <div v-else class="i-mdi-close text-lg"></div>
      </button>
      
      <!-- Logo -->
      <div class="flex items-center ml-2 md:ml-0">
        <router-link to="/" class="text-xl font-bold tracking-tight text-primary-600 dark:text-primary-400">
          YourName
        </router-link>
      </div>
      
      <!-- Desktop Nav Items -->
      <div class="hidden md:flex items-center space-x-6">
        <router-link 
          v-for="route in $router.options.routes" 
          :key="route.path"
          :to="route.path"
          class="font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          active-class="text-primary-600 dark:text-primary-400"
        >
          {{ route.meta?.title }}
        </router-link>
      </div>
      
      <!-- Dark mode toggle -->
      <button 
        class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        @click="$emit('toggleDarkMode')"
        aria-label="Toggle dark mode"
      >
        <div v-if="isDarkMode" class="i-mdi-white-balance-sunny text-lg"></div>
        <div v-else class="i-mdi-moon text-lg"></div>
      </button>
    </div>
  </nav>
</template>