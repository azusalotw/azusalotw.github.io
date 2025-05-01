<script setup lang="ts">
import { ref } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'

// Portfolio highlights for home page
const portfolioHighlights = ref([
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive online store built with Vue and Node.js',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    tags: ['Vue', 'Node.js', 'Express', 'MongoDB'],
    link: '/portfolio'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location tracking',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    tags: ['Vue', 'API Integration', 'Geolocation'],
    link: '/portfolio'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Vue',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    tags: ['Vue', 'UnoCSS', 'Responsive Design'],
    link: '/portfolio'
  }
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-600/90 z-0"></div>
      <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg')] bg-cover bg-center mix-blend-overlay z-0"></div>
      
      <div class="container relative z-10 text-white">
        <div class="max-w-2xl mx-auto md:mx-0">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style="animation-delay: 0.3s">
            Hello, I'm Your Name
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style="animation-delay: 0.6s">
            A passionate web developer creating beautiful and functional digital experiences
          </p>
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in" style="animation-delay: 0.9s">
            <router-link to="/portfolio" class="btn-primary text-center">
              View My Work
            </router-link>
            <router-link to="/contact" class="btn bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-center">
              Contact Me
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span class="text-white text-sm mb-2">Scroll Down</span>
        <div class="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45"></div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="section bg-white dark:bg-gray-800">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="w-full md:w-2/5">
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg" 
                alt="Working on laptop" 
                class="w-full h-auto" 
              />
            </div>
          </div>
          
          <div class="w-full md:w-3/5">
            <h3 class="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              Frontend Developer & UI/UX Enthusiast
            </h3>
            
            <p class="mb-6 text-gray-700 dark:text-gray-300">
              I'm a passionate web developer with a keen eye for design and a commitment to creating 
              seamless user experiences. With expertise in modern frontend technologies, I build 
              responsive, accessible, and performant web applications.
            </p>
            
            <div class="flex flex-wrap gap-3 mb-8">
              <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">TypeScript</span>
              <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">UnoCSS</span>
              <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">Responsive Design</span>
              <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">UI/UX</span>
            </div>
            
            <router-link to="/about" class="btn-primary">
              Learn More About Me
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Preview -->
    <section class="section bg-gray-50 dark:bg-gray-900">
      <div class="container">
        <h2 class="text-3xl font-bold mb-4 text-center">Recent Projects</h2>
        <p class="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent works. Each project presented unique challenges and opportunities for growth.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard 
            v-for="project in portfolioHighlights" 
            :key="project.id" 
            :project="project" 
          />
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/portfolio" class="btn-primary">
            View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p class="mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work. If you have a project that needs some creative touch, I'd love to hear about it.
        </p>
        <router-link to="/contact" class="btn bg-white text-primary-600 hover:bg-gray-100">
          Get In Touch
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>