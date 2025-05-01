<script setup lang="ts">
import { ref } from 'vue'
import SkillBar from '@/components/SkillBar.vue'

const frontendSkills = ref([
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Vue.js', level: 92 },
  { name: 'React', level: 80 },
  { name: 'TypeScript', level: 85 },
  { name: 'UnoCSS/Tailwind', level: 88 }
])

const backendSkills = ref([
  { name: 'Node.js', level: 75 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 70 },
  { name: 'RESTful APIs', level: 85 },
  { name: 'GraphQL', level: 65 },
  { name: 'Firebase', level: 75 }
])

const toolsSkills = ref([
  { name: 'Git & GitHub', level: 90 },
  { name: 'VS Code', level: 95 },
  { name: 'Webpack/Vite', level: 85 },
  { name: 'Figma', level: 75 },
  { name: 'Jest/Vitest', level: 70 },
  { name: 'Docker', level: 65 }
])
</script>

<template>
  <div>
    <!-- Header -->
    <section class="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
        <p class="text-xl opacity-90 max-w-2xl">
          A comprehensive overview of my technical skills and abilities as a web developer.
        </p>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <!-- Technical Skills -->
          <div>
            <h2 class="text-3xl font-bold mb-12">Technical Skills</h2>
            
            <div class="mb-12">
              <h3 class="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">Frontend Development</h3>
              <div class="space-y-6">
                <SkillBar 
                  v-for="skill in frontendSkills" 
                  :key="skill.name" 
                  :skill="skill" 
                />
              </div>
            </div>
            
            <div class="mb-12">
              <h3 class="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">Backend Development</h3>
              <div class="space-y-6">
                <SkillBar 
                  v-for="skill in backendSkills" 
                  :key="skill.name" 
                  :skill="skill" 
                />
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">Tools & Technologies</h3>
              <div class="space-y-6">
                <SkillBar 
                  v-for="skill in toolsSkills" 
                  :key="skill.name" 
                  :skill="skill" 
                />
              </div>
            </div>
          </div>
          
          <!-- Soft Skills & Certifications -->
          <div>
            <h2 class="text-3xl font-bold mb-12">Soft Skills & Certifications</h2>
            
            <!-- Soft Skills -->
            <div class="card mb-8">
              <h3 class="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">Soft Skills</h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Problem Solving</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Communication</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Team Collaboration</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Time Management</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Adaptability</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Attention to Detail</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Critical Thinking</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span>Creativity</span>
                </div>
              </div>
            </div>
            
            <!-- Certifications -->
            <div class="card mb-8">
              <h3 class="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">Certifications</h3>
              
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <div class="i-mdi-certificate text-primary-600 dark:text-primary-400 text-2xl"></div>
                  </div>
                  <div>
                    <h4 class="font-bold">Vue.js Certification</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Vue.js Official, 2023</p>
                    <p class="text-gray-700 dark:text-gray-300">
                      Advanced Vue.js concepts including composition API, state management, and performance optimization.
                    </p>
                  </div>
                </div>
                
                <div class="flex gap-4">
                  <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <div class="i-mdi-certificate text-primary-600 dark:text-primary-400 text-2xl"></div>
                  </div>
                  <div>
                    <h4 class="font-bold">Responsive Web Design</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">freeCodeCamp, 2022</p>
                    <p class="text-gray-700 dark:text-gray-300">
                      Creating responsive, mobile-first websites with HTML, CSS, and flexbox/grid layouts.
                    </p>
                  </div>
                </div>
                
                <div class="flex gap-4">
                  <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <div class="i-mdi-certificate text-primary-600 dark:text-primary-400 text-2xl"></div>
                  </div>
                  <div>
                    <h4 class="font-bold">JavaScript Algorithms and Data Structures</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">freeCodeCamp, 2021</p>
                    <p class="text-gray-700 dark:text-gray-300">
                      Fundamental programming concepts in JavaScript including variables, arrays, objects, loops, and functions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Languages -->
            <div class="card">
              <h3 class="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">Languages</h3>
              
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">English</span>
                    <span>Fluent</span>
                  </div>
                  <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="h-full rounded-full bg-primary-500" style="width: 95%"></div>
                  </div>
                </div>
                
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">Spanish</span>
                    <span>Intermediate</span>
                  </div>
                  <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="h-full rounded-full bg-primary-500" style="width: 75%"></div>
                  </div>
                </div>
                
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">French</span>
                    <span>Basic</span>
                  </div>
                  <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="h-full rounded-full bg-primary-500" style="width: 40%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats -->
    <section class="section bg-gray-50 dark:bg-gray-900">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">My Work in Numbers</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
            <div class="text-gray-700 dark:text-gray-300">Projects Completed</div>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
            <div class="text-gray-700 dark:text-gray-300">Years Experience</div>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
            <div class="text-gray-700 dark:text-gray-300">Happy Clients</div>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
            <div class="text-gray-700 dark:text-gray-300">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>