<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import type { BlogPost } from '@/components/blog/BlogCard.vue'

// Sample blog posts
const posts: BlogPost[] = [
  {
    id: 'getting-started-with-vue3',
    title: 'Getting Started with Vue 3 Composition API',
    excerpt: 'Learn how to use Vue 3\'s Composition API to build more maintainable and scalable applications.',
    date: 'Dec 15, 2023',
    readingTime: '5 min',
    tags: ['Vue.js', 'JavaScript', 'Web Development'],
    coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg'
  },
  {
    id: 'modern-css-techniques',
    title: 'Modern CSS Techniques for Better Web Design',
    excerpt: 'Explore modern CSS features and techniques that will help you create better web designs.',
    date: 'Dec 10, 2023',
    readingTime: '4 min',
    tags: ['CSS', 'Web Design', 'Frontend'],
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg'
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Discover the best practices for writing clean and maintainable TypeScript code.',
    date: 'Dec 5, 2023',
    readingTime: '6 min',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg'
  }
]

const categories = ['All', 'Vue.js', 'TypeScript', 'CSS', 'JavaScript', 'Web Design']
const selectedCategory = ref('All')

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return posts
  }
  return posts.filter(post => post.tags.includes(selectedCategory.value))
})
</script>

<template>
  <div>
    <!-- Blog Hero -->
    <section class="py-32 pt-40 relative">
      <div class="absolute -z-10 inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900"></div>
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Blog
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, design, and technology.
        </p>
      </div>
    </section>
    
    <!-- Blog Categories -->
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
    
    <!-- Blog Posts -->
    <section class="py-12">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            v-for="post in filteredPosts" 
            :key="post.id"
            :post="post"
          />
        </div>
        
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <p class="text-lg text-gray-600 dark:text-gray-400">
            No posts found in this category.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>