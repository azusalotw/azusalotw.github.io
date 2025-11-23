<script setup lang="ts">
// About page logic
</script>

<template>
  <div class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-16 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div class="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div class="order-2 md:order-1">
            <h2 class="text-2xl font-bold mb-4">Who I Am</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate web developer based in [Your Location]. I love creating beautiful, accessible, and user-friendly websites.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              With a background in [Your Background], I bring a unique perspective to every project. I'm constantly learning new technologies and best practices to deliver the best possible results.
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me [Your Hobbies].
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

        <!-- Skills -->
        <div class="mb-20">
          <h2 class="text-2xl font-bold mb-8 text-center">My Tech Stack</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              Vue.js
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              TypeScript
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              UnoCSS
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              Node.js
            </span>
            <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              Git
            </span>
             <span class="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
              HTML5 & CSS3
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>