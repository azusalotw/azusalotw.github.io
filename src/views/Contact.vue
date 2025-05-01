<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formSubmitted = ref(false)
const formError = ref(false)

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = () => {
  // Basic validation
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    formError.value = true
    return
  }
  
  if (!validateEmail(formData.value.email)) {
    formError.value = true
    return
  }
  
  // In a real application, you would send the form data to a server
  // For this example, we'll just simulate a successful submission
  formError.value = false
  formSubmitted.value = true
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <div>
    <!-- Header -->
    <section class="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <p class="text-xl opacity-90 max-w-2xl">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="card">
            <h2 class="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">Get In Touch</h2>
            
            <!-- Success Message -->
            <div v-if="formSubmitted" class="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300">
              <p class="font-medium">Your message has been sent successfully!</p>
              <p class="text-sm mt-1">I'll get back to you as soon as possible.</p>
            </div>
            
            <!-- Error Message -->
            <div v-if="formError" class="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
              <p class="font-medium">There was an error with your submission.</p>
              <p class="text-sm mt-1">Please check all fields and try again.</p>
            </div>
            
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                <input 
                  id="name" 
                  v-model="formData.name" 
                  type="text" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                <input 
                  id="email" 
                  v-model="formData.email" 
                  type="email" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  id="subject" 
                  v-model="formData.subject" 
                  type="text" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  rows="6" 
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div>
            <div class="card mb-8">
              <h2 class="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <div class="i-mdi-email text-primary-600 dark:text-primary-400 text-2xl"></div>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:your.email@example.com" class="text-primary-600 dark:text-primary-400 hover:underline">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div class="flex gap-4">
                  <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <div class="i-mdi-phone text-primary-600 dark:text-primary-400 text-2xl"></div>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+1234567890" class="text-primary-600 dark:text-primary-400 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div class="flex gap-4">
                  <div class="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <div class="i-mdi-map-marker text-primary-600 dark:text-primary-400 text-2xl"></div>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-1">Location</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                      San Francisco, CA, United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="card">
              <h2 class="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">Connect With Me</h2>
              
              <div class="grid grid-cols-2 gap-4">
                <a href="#" class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div class="i-mdi-github text-2xl"></div>
                  <span class="font-medium">GitHub</span>
                </a>
                
                <a href="#" class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div class="i-mdi-linkedin text-2xl"></div>
                  <span class="font-medium">LinkedIn</span>
                </a>
                
                <a href="#" class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div class="i-mdi-twitter text-2xl"></div>
                  <span class="font-medium">Twitter</span>
                </a>
                
                <a href="#" class="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div class="i-mdi-instagram text-2xl"></div>
                  <span class="font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map -->
    <section class="section pt-0">
      <div class="container">
        <div class="rounded-lg overflow-hidden h-80 border border-gray-200 dark:border-gray-700">
          <img 
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg" 
            alt="Map Location" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>