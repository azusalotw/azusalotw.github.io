<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  skill: {
    name: string;
    level: number;
  }
}>()

const animate = ref(false)

onMounted(() => {
  // Delay animation to allow for page transitions
  setTimeout(() => {
    animate.value = true
  }, 200)
})
</script>

<template>
  <div>
    <div class="flex justify-between mb-2">
      <span class="font-medium">{{ skill.name }}</span>
      <span>{{ skill.level }}%</span>
    </div>
    <div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div 
        class="h-full bg-primary-500 rounded-full transition-all duration-1000 ease-out"
        :style="{ width: animate ? `${skill.level}%` : '0%' }"
      ></div>
    </div>
  </div>
</template>