<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-12 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ title }}</h2>
    <p v-if="subtitle" class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{{ subtitle }}</p>
  </div>
</template>