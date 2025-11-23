<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'

const projects = ref([
  {
    id: 1,
    title: '橋牌教學網',
    description: '一個專為初學者設計的橋牌教學網站，從基礎規則到進階叫牌技巧，帶領你進入橋牌的奧妙世界。',
    image: 'https://images.pexels.com/photos/279009/pexels-photo-279009.jpeg',
    tags: ['Vue', 'Bridge', 'Tutorial'],
    category: 'Web Application',
    link: '/contract-bridge',
    isInternal: true
  }
])

const categories = computed(() => {
  const allCategories = projects.value.map(project => project.category)
  return ['全部', ...new Set(allCategories)]
})

const selectedCategory = ref('全部')

const filteredProjects = computed(() => {
  if (selectedCategory.value === '全部') {
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
        <h1 class="text-4xl md:text-5xl font-bold mb-6">我的專案</h1>
        <p class="text-xl opacity-90 max-w-2xl">
          我的作品展示。每個專案都代表著獨特的挑戰和解決方案。
        </p>
      </div>
    </section>
    
    <!-- Projects Grid -->
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
            在此分類中找不到專案。
          </p>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="section bg-gray-50 dark:bg-gray-900">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-6">有興趣合作嗎？</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          我隨時歡迎討論新專案、創意點子或參與您願景的機會。
        </p>
        <a href="mailto:contact@example.com" class="btn-primary">
          聯絡我
        </a>
      </div>
    </section>
  </div>
</template>
