<script setup lang="ts">
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tags: string[]
  coverImage?: string
}

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <router-link 
    :to="`/blog/${post.id}`"
    class="block group"
  >
    <article class="card h-full overflow-hidden hover:shadow-lg transition-all duration-300">
      <div v-if="post.coverImage" class="relative h-48 overflow-hidden">
        <img 
          :src="post.coverImage" 
          :alt="post.title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div class="p-6">
        <div class="flex gap-2 mb-3">
          <span 
            v-for="tag in post.tags.slice(0, 3)" 
            :key="tag"
            class="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
          >
            {{ tag }}
          </span>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {{ post.title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.excerpt }}</p>
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{{ post.date }}</span>
          <span class="mx-2">•</span>
          <span>{{ post.readingTime }} read</span>
        </div>
      </div>
    </article>
  </router-link>
</template>