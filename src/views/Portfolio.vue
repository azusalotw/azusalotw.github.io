<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import type { Project } from '@/components/portfolio/ProjectCard.vue'

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering and cart functionality.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'Web Development',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    url: '#'
  },
  {
    id: 2,
    title: 'Travel Blog',
    description: 'Responsive travel blog with dynamic content and image galleries.',
    image: 'https://images.pexels.com/photos/7625640/pexels-photo-7625640.jpeg',
    category: 'Web Design',
    tags: ['Vue.js', 'TailwindCSS', 'Firebase'],
    url: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity application for managing tasks and collaborating with teams.',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg',
    category: 'Mobile App',
    tags: ['React Native', 'Redux', 'Firebase'],
    url: '#'
  },
  {
    id: 4,
    title: 'Financial Dashboard',
    description: 'Interactive dashboard with real-time data visualization and reporting.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
    category: 'Web Development',
    tags: ['React.js', 'D3.js', 'Node.js'],
    url: '#'
  },
  {
    id: 5,
    title: 'Restaurant Website',
    description: 'Elegant website for a high-end restaurant with online reservation system.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    category: 'Web Design',
    tags: ['WordPress', 'Custom Theme', 'PHP'],
    url: '#'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Mobile application for tracking workouts, nutrition, and fitness progress.',
    image: 'https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg',
    category: 'Mobile App',
    tags: ['React Native', 'GraphQL', 'Firebase'],
    url: '#'
  }
]

// Categories
const categories = ['All', 'Web Development', 'Web Design', 'Mobile App']
const selectedCategory = ref('All')

// Filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <!-- Portfolio Hero -->
    <section class="py-32 pt-40 relative">
      <div class="absolute -z-10 inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900"></div>
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          My Portfolio
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore a selection of my recent work across various domains and technologies.
        </p>
      </div>
    </section>
    
    <!-- Portfolio Filters -->
    <section class="py-8">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            class="px-4 py-2 rounded-full transition-all duration-200"
            :class="[
              selectedCategory === category 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="py-12">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id"
            :project="project"
          />
        </div>
        
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <p class="text-lg text-gray-600 dark:text-gray-400">
            No projects found in this category.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="py-20 bg-gray-100 dark:bg-gray-800">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Let's Work Together
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Interested in collaborating on a project? I'm always open to discussing new opportunities and challenges.
        </p>
        <router-link to="/contact" class="btn-primary text-lg px-8 py-3">
          Get in Touch
        </router-link>
      </div>
    </section>
  </div>
</template>