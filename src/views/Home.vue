<script setup lang="ts">
import Hero from '@/components/home/Hero.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProjectCard from '@/components/portfolio/ProjectCard.vue'

// Sample featured projects
const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering and cart functionality.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'Web Development',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    url: '#'
  },
  {
    id: 2,
    title: 'Travel Blog',
    description: 'Responsive travel blog with dynamic content and image galleries.',
    image: 'https://images.pexels.com/photos/7625640/pexels-photo-7625640.jpeg',
    category: 'Web Design',
    tags: ['Vue.js', 'TailwindCSS', 'Firebase'],
    url: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Productivity application for managing tasks and collaborating with teams.',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg',
    category: 'Mobile App',
    tags: ['React Native', 'Redux', 'Firebase'],
    url: '#'
  }
]

// Services offered
const services = [
  {
    title: 'Web Development',
    description: 'Creating modern, responsive websites and web applications with the latest technologies.',
    icon: 'i-carbon-application-web'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful user interfaces and experiences that are intuitive and engaging.',
    icon: 'i-carbon-paint-brush'
  },
  {
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications that provide native-like experiences.',
    icon: 'i-carbon-mobile'
  },
  {
    title: 'Consulting',
    description: 'Providing expert advice on technical decisions and helping teams implement best practices.',
    icon: 'i-carbon-chat'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero />
    
    <!-- About Section Preview -->
    <section class="py-20">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate web developer and designer with over 5 years of experience creating 
              digital solutions for clients across various industries.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
              My approach combines technical expertise with an eye for design, 
              ensuring that every project not only functions flawlessly but 
              also provides an exceptional user experience.
            </p>
            <router-link to="/about" class="btn-primary">
              Learn More About Me
            </router-link>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="card p-5 flex items-center h-32 bg-primary-50 dark:bg-primary-900/20">
              <div class="text-3xl text-primary-500 dark:text-primary-400 mr-4 i-carbon-code"></div>
              <div>
                <h3 class="font-bold text-xl text-gray-900 dark:text-white">50+</h3>
                <p class="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
            </div>
            <div class="card p-5 flex items-center h-32 bg-secondary-50 dark:bg-secondary-900/20">
              <div class="text-3xl text-secondary-500 dark:text-secondary-400 mr-4 i-carbon-user-multiple"></div>
              <div>
                <h3 class="font-bold text-xl text-gray-900 dark:text-white">30+</h3>
                <p class="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
            </div>
            <div class="card p-5 flex items-center h-32 bg-accent-50 dark:bg-accent-900/20">
              <div class="text-3xl text-accent-500 dark:text-accent-400 mr-4 i-carbon-certificate"></div>
              <div>
                <h3 class="font-bold text-xl text-gray-900 dark:text-white">5+</h3>
                <p class="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </div>
            <div class="card p-5 flex items-center h-32 bg-gray-100 dark:bg-gray-800">
              <div class="text-3xl text-gray-500 dark:text-gray-400 mr-4 i-carbon-award"></div>
              <div>
                <h3 class="font-bold text-xl text-gray-900 dark:text-white">10+</h3>
                <p class="text-gray-600 dark:text-gray-400">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="py-20 bg-gray-100 dark:bg-gray-800">
      <div class="container">
        <SectionTitle 
          title="My Services" 
          subtitle="Here are the services I offer to help bring your digital vision to life"
        />
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="service in services" 
            :key="service.title"
            class="card p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div :class="service.icon" class="text-3xl text-primary-500 dark:text-primary-400 mb-4"></div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{{ service.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Projects -->
    <section class="py-20">
      <div class="container">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of my recent work that showcases my skills and expertise"
        />
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project"
          />
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/portfolio" class="btn-primary">
            View All Projects
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="py-20 bg-primary-50 dark:bg-primary-900/20">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to start your project?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's work together to create something amazing. Get in touch and let's discuss how I can help bring your ideas to life.
        </p>
        <router-link to="/contact" class="btn-primary text-lg px-8 py-3">
          Get in Touch
        </router-link>
      </div>
    </section>
  </div>
</template>