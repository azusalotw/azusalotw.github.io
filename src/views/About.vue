<script setup lang="ts">
// About page logic
</script>

<template>
  <div class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-16 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">關於我</h1>
          <div class="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div class="order-2 md:order-1">
            <h2 class="text-2xl font-bold mb-4">我是誰</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              我是 Azusa Lo，目前任職於中興工程顧問股份有限公司，擔任結構工程師。我的工作內容主要涵蓋大眾運輸的地下車站結構設計，以及結構分析自動化程式的撰寫與維護。
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              我擁有台灣大學土木工程學系結構工程組碩士學位，以及森林環境暨資源學系學士學位（輔修土木工程）。在學術與實務經驗中，我累積了深厚的結構力學基礎與程式開發能力。
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              工作之餘，我的興趣是打橋牌。這項智力運動培養了我的邏輯思考與策略規劃能力，也讓我更能冷靜面對複雜的工程挑戰。
            </p>
          </div>
          <div class="order-1 md:order-2 flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80">
              <div class="absolute inset-0 bg-primary-600 rounded-2xl transform rotate-6 opacity-20"></div>
              <div class="absolute inset-0 bg-secondary-600 rounded-2xl transform -rotate-6 opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                alt="Profile" 
                class="relative w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="mb-20">
          <h2 class="text-2xl font-bold mb-8 text-center">學歷</h2>
          <div class="space-y-6 max-w-3xl mx-auto">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 class="text-xl font-bold mb-2">國立台灣大學 土木工程學系 結構工程組</h3>
              <p class="text-primary-600 dark:text-primary-400 font-medium mb-2">碩士 (MSc)</p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 class="text-xl font-bold mb-2">國立台灣大學 森林環境暨資源學系</h3>
              <p class="text-primary-600 dark:text-primary-400 font-medium mb-2">學士 (BSc) - 輔修土木工程學系</p>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="mb-20">
          <h2 class="text-2xl font-bold mb-8 text-center">我的技術堆疊</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              SAP2000
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              ETABS
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              ABAQUS
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              AutoCAD
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              REVIT
            </span>
             <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              C#
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              Python
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              鋼結構設計
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              RC結構設計
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>