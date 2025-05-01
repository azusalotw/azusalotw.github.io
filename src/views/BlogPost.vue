<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const router = useRouter()
const content = ref('')
const post = ref({
  title: '',
  date: '',
  readingTime: '',
  tags: [],
  content: ''
})

// Sample blog post data - In a real app, this would come from an API or CMS
const posts = {
  'getting-started-with-vue3': {
    title: 'Getting Started with Vue 3 Composition API',
    date: 'Dec 15, 2023',
    readingTime: '5 min',
    tags: ['Vue.js', 'JavaScript', 'Web Development'],
    content: `
# Getting Started with Vue 3 Composition API

Vue 3's Composition API provides a new way to organize component logic, making it more maintainable and reusable.

## What is the Composition API?

The Composition API is a set of APIs that allows us to write Vue components using imported functions instead of declaring options. It gives us:

- Better TypeScript support
- More flexible code organization
- Better code reuse
- Better runtime performance

## Basic Usage

Here's a simple example:

\`\`\`js
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    function increment() {
      count.value++
    }
    
    onMounted(() => {
      console.log('Component mounted!')
    })
    
    return {
      count,
      increment
    }
  }
}
\`\`\`

## Advantages Over Options API

1. Better organization of related code
2. More flexible code reuse
3. Better TypeScript support
4. More predictable typing

## When to Use It?

The Composition API is particularly useful when:

- Building large-scale applications
- Working with TypeScript
- Needing to reuse logic across components
- Organizing complex component logic

## Conclusion

The Composition API is a powerful addition to Vue 3 that helps us write more maintainable and scalable applications.
`
  },
  'modern-css-techniques': {
    title: 'Modern CSS Techniques for Better Web Design',
    date: 'Dec 10, 2023',
    readingTime: '4 min',
    tags: ['CSS', 'Web Design', 'Frontend'],
    content: `
# Modern CSS Techniques for Better Web Design

Modern CSS has evolved significantly, providing powerful features for creating better web designs.

## CSS Grid Layout

CSS Grid is a powerful tool for creating two-dimensional layouts:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS Custom Properties

Variables in CSS make it easier to maintain consistent styles:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #14b8a6;
}

.button {
  background-color: var(--primary-color);
  color: white;
}
\`\`\`

## Modern Selectors

New selectors make targeting elements more precise:

\`\`\`css
/* Select all paragraphs that are direct children of articles */
article > p {
  margin-bottom: 1rem;
}

/* Select elements using data attributes */
[data-theme="dark"] {
  background-color: #1a1a1a;
  color: #ffffff;
}
\`\`\`

## Conclusion

Modern CSS provides powerful features that make web design more flexible and maintainable.
`
  }
}

onMounted(() => {
  const postId = route.params.id as string
  const postData = posts[postId]
  
  if (!postData) {
    router.push('/blog')
    return
  }
  
  post.value = postData
  content.value = marked(postData.content)
})
</script>

<template>
  <div class="py-32 pt-40">
    <article class="container max-w-3xl">
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ post.title }}
        </h1>
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span>{{ post.date }}</span>
          <span>•</span>
          <span>{{ post.readingTime }} read</span>
          <div class="flex gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </header>
      
      <div 
        class="prose prose-lg dark:prose-invert prose-primary max-w-none"
        v-html="content"
      ></div>
      
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <router-link 
          to="/blog"
          class="text-primary-600 dark:text-primary-400 hover:underline"
        >
          ← Back to Blog
        </router-link>
      </div>
    </article>
  </div>
</template>