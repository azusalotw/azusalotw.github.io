<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'

const projects = ref([
  {
    id: 1,
    title: '電子商務網站',
    description: '一個使用 Vue 和 Node.js 構建的完全響應式線上商店。功能包括產品篩選、使用者認證、購物車功能和支付處理。',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    tags: ['Vue', 'Node.js', 'Express', 'MongoDB'],
    category: 'Web Application',
    link: '#'
  },
  {
    id: 2,
    title: '天氣儀表板',
    description: '具有位置追蹤功能的即時天氣應用程式。使用者可以按城市名稱搜尋天氣，或使用當前位置獲取最新天氣資訊。',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    tags: ['Vue', 'API Integration', 'Geolocation'],
    category: 'Web Application',
    link: '#'
  },
  {
    id: 3,
    title: '個人網站',
    description: '使用 Vue 和 UnoCSS 構建的現代響應式個人網站。具有流暢的過渡效果、深色模式切換和完全響應式設計。',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    tags: ['Vue', 'UnoCSS', 'Responsive Design'],
    category: 'Website',
    link: '#'
  },
  {
    id: 4,
    title: '任務管理應用程式',
    description: '用於管理任務和專案的生產力應用程式。功能包括拖放功能、任務優先順序和截止日期提醒。',
    image: 'https://images.pexels.com/photos/6956/snow-trees-forest-winter.jpg',
    tags: ['Vue', 'Vuex', 'Firebase'],
    category: 'Web Application',
    link: '#'
  },
  {
    id: 5,
    title: '餐廳登陸頁面',
    description: '現代化的餐廳登陸頁面，包含菜單展示、預訂表單和位置地圖整合。',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Website',
    link: '#'
  },
  {
    id: 6,
    title: '音樂串流應用程式',
    description: '具有播放清單建立、音樂探索和社交分享功能的網頁版音樂串流應用程式。',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    tags: ['Vue', 'Node.js', 'MongoDB', 'WebAudio API'],
    category: 'Web Application',
    link: '#'
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
