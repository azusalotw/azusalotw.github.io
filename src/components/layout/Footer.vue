<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="container py-8">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-600 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.
          </p>
        </div>
        
        <div class="flex space-x-6">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            <div class="i-mdi-github"></div>
          </a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            <div class="i-mdi-linkedin"></div>
          </a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            <div class="i-mdi-twitter"></div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>