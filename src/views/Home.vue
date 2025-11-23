<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToProjects = () => {
  router.push('/projects')
}
</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh-4rem)] justify-center">
    <!-- Hero Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-fade-in-up">
            Hello, I'm <span class="text-primary-600 dark:text-primary-400">Your Name</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            A passionate developer crafting beautiful and functional web experiences.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <button 
              @click="navigateToProjects"
              class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/30"
            >
              View My Work
            </button>
            <router-link 
              to="/about"
              class="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold transition-all transform hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              About Me
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features/Skills Quick View -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 text-2xl">
              <div class="i-mdi-monitor"></div>
            </div>
            <h3 class="text-xl font-bold mb-2">Frontend Development</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Building responsive, accessible, and performant user interfaces with modern frameworks.
            </p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-4 text-2xl">
              <div class="i-mdi-server"></div>
            </div>
            <h3 class="text-xl font-bold mb-2">Backend Integration</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Connecting frontends to robust backend systems and APIs for dynamic content.
            </p>
          </div>
          <div class="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4 text-2xl">
              <div class="i-mdi-palette"></div>
            </div>
            <h3 class="text-xl font-bold mb-2">UI/UX Design</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Creating intuitive and visually appealing designs that enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>