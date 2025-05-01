<script setup lang="ts">
defineProps<{
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  }
}>()
</script>

<template>
  <div class="group">
    <div class="card overflow-hidden transition-all duration-300 hover:shadow-md">
      <!-- Image -->
      <div class="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 -mx-6 -mt-6 mb-6">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <!-- Content -->
      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {{ project.description }}
      </p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- Link -->
      <a :href="project.link" class="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center">
        View Project
        <div class="i-mdi-arrow-right ml-1"></div>
      </a>
    </div>
  </div>
</template>