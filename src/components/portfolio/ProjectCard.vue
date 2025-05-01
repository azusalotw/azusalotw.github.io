<script setup lang="ts">
import { ref } from 'vue'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  url?: string
}

defineProps<{
  project: Project
}>()

const isHovered = ref(false)
</script>

<template>
  <div 
    class="card overflow-hidden transition-all duration-300 h-full"
    :class="{ 'transform -translate-y-2': isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative overflow-hidden" style="aspect-ratio: 16/9;">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover transition-transform duration-500"
        :class="{ 'scale-105': isHovered }"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300" 
        :class="{ 'opacity-100': isHovered }"
      ></div>
      <div v-if="project.url" class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
        :class="{ 'opacity-100': isHovered }"
      >
        <a 
          :href="project.url" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-primary"
        >
          View Project
        </a>
      </div>
    </div>
    <div class="p-5">
      <div class="flex gap-2 mb-3">
        <span 
          v-for="tag in project.tags.slice(0, 3)" 
          :key="tag"
          class="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400">{{ project.description }}</p>
    </div>
  </div>
</template>