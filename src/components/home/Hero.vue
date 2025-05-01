<script setup lang="ts">
const socialLinks = [
  { name: 'GitHub', icon: 'i-carbon-logo-github', url: 'https://github.com/' },
  { name: 'LinkedIn', icon: 'i-carbon-logo-linkedin', url: 'https://linkedin.com/in/' },
  { name: 'Email', icon: 'i-carbon-email', url: 'mailto:your.email@example.com' },
]
</script>

<template>
  <section class="relative min-h-screen flex items-center py-20">
    <!-- Background decoration -->
    <div class="absolute right-0 top-1/4 w-1/3 h-1/3 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>
    <div class="absolute left-10 bottom-1/4 w-1/4 h-1/4 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>
    
    <div class="container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <span class="inline-block text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full mb-4">
            Web Developer & Designer
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Creating <span class="text-primary-600 dark:text-primary-400">beautiful</span> digital experiences
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I design and build delightful digital products that help businesses and individuals achieve their goals.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <router-link to="/portfolio" class="btn-primary">
              View My Work
            </router-link>
            <router-link to="/contact" class="btn border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-400">
              Contact Me
            </router-link>
          </div>
          
          <div class="mt-8 flex items-center gap-4">
            <a 
              v-for="link in socialLinks" 
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              :aria-label="link.name"
            >
              <div :class="link.icon" class="text-2xl"></div>
            </a>
          </div>
        </div>
        
        <div class="order-1 md:order-2 flex justify-center">
          <div class="relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-50 group-hover:opacity-70 transition-all"></div>
            <div class="relative rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl" style="aspect-ratio: 1/1; max-width: 400px;">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="Professional portrait" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>