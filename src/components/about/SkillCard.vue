<script setup lang="ts">
defineProps<{
  title: string
  skills: string[]
  icon: string
}>()
</script>

<template>
  <div class="card h-full p-6">
    <div class="mb-4 text-primary-500 dark:text-primary-400 text-3xl" :class="icon"></div>
    <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{{ title }}</h3>
    <ul class="space-y-2">
      <li v-for="skill in skills" :key="skill" class="text-gray-700 dark:text-gray-300 flex items-center">
        <span class="i-carbon-checkmark-outline text-green-500 mr-2"></span>
        {{ skill }}
      </li>
    </ul>
  </div>
</template>