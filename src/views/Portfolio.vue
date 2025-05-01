<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'

const projects = ref([
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive online store built with Vue and Node.js. Features include product filtering, user authentication, cart functionality, and payment processing.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    tags: ['Vue', 'Node.js', 'Express', 'MongoDB'],
    category: 'Web Application',
    link: '#'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location tracking. Users can search for weather by city name or use their current location to get up-to-date weather information.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    tags: ['Vue', 'API Integration', 'Geolocation'],
    category: 'Web Application',
    link: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Vue and UnoCSS. Features smooth transitions, dark mode toggle, and fully responsive design.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    tags: ['Vue', 'UnoCSS', 'Responsive Design'],
    category: 'Website',
    link: '#'
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects. Features include drag and drop functionality, task prioritization, and due date reminders.',
    image: 'https://images.pexels.com/photos/6956/snow-trees-forest-winter.jpg',
    tags: ['Vue', 'Vuex', 'Firebase'],
    category: 'Web Application',
    link: '#'
  },
  {
    id: 5,
    title: 'Restaurant Landing Page',
    description: 'A modern landing page for a restaurant with menu display, reservation form, and location map integration.',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Website',
    link: '#'
  },
  {
    id: 6,
    title: 'Music Streaming App',
    description: 'A web-based music streaming application with playlist creation, music discovery, and social sharing features.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    tags: ['Vue', 'Node.js', 'MongoDB', 'WebAudio API'],
    category: 'Web Application',
    link: '#'
  }
])

const categories = computed(() => {
  const allCategories = projects.value.map(project => project.category)
  return ['All', ...new Set(allCategories)]
})

const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <!-- Header -->
    <section class="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
        <p class="text-xl opacity-90 max-w-2xl">
          A showcase of my web development projects. Each project represents a unique challenge and solution.
        </p>
      </div>
    </section>
    
    <!-- Portfolio Grid -->
    <section class="section">
      <div class="container">
        <!-- Category Filter -->
        <div class="mb-12 flex justify-center">
          <div class="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button 
              v-for="category in categories" 
              :key="category"
              class="px-4 py-2 rounded-lg transition-colors"
              :class="selectedCategory === category ? 
                'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400' : 
                'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
        
        <!-- No Results -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <p class="text-xl text-gray-600 dark:text-gray-400">
            No projects found in this category.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="section bg-gray-50 dark:bg-gray-900">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-6">Interested in working together?</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <router-link to="/contact" class="btn-primary">
          Get In Touch
        </router-link>
      </div>
    </section>
  </div>
</template>