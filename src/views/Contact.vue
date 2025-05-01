<script setup lang="ts">
import { ref } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const formSubmitted = ref(false)
const formError = ref(false)

// Contact info
const contactInfo = [
  {
    icon: 'i-carbon-email',
    title: 'Email',
    value: 'hello@example.com',
    link: 'mailto:hello@example.com'
  },
  {
    icon: 'i-carbon-location',
    title: 'Location',
    value: 'San Francisco, CA',
    link: '#'
  },
  {
    icon: 'i-carbon-time',
    title: 'Working Hours',
    value: 'Mon - Fri, 9am - 5pm PST',
    link: '#'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    
    formSubmitted.value = true
    formError.value = false
  } catch (error) {
    formError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <!-- Contact Hero -->
    <section class="py-32 pt-40 relative">
      <div class="absolute -z-10 inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900"></div>
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>
      </div>
    </section>
    
    <!-- Contact Content -->
    <section class="py-20">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="md:col-span-1">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            
            <div class="space-y-6">
              <div 
                v-for="item in contactInfo" 
                :key="item.title"
                class="flex items-start"
              >
                <div :class="item.icon" class="text-2xl text-primary-500 dark:text-primary-400 mr-4 mt-1"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
                  <a 
                    :href="item.link" 
                    class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {{ item.value }}
                  </a>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h3>
              <div class="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <div class="i-carbon-logo-github"></div>
                </a>
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <div class="i-carbon-logo-linkedin"></div>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <div class="i-carbon-logo-twitter"></div>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="md:col-span-2">
            <div class="card p-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              
              <form @submit.prevent="handleSubmit">
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div class="mb-6">
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    v-model="formData.subject"
                    type="text"
                    required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div class="mb-6">
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="5"
                    required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    class="w-full btn-primary py-3"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting">Sending...</span>
                    <span v-else>Send Message</span>
                  </button>
                </div>
                
                <div v-if="formSubmitted" class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
                
                <div v-if="formError" class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map or Additional Info (Optional) -->
    <section class="py-12 bg-gray-100 dark:bg-gray-800">
      <div class="container">
        <div class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          
          <div class="space-y-6">
            <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">What services do you offer?</h3>
              <p class="text-gray-600 dark:text-gray-400">
                I specialize in web development, UI/UX design, and mobile app development.
                My services include creating responsive websites, web applications, and designing user interfaces.
              </p>
            </div>
            
            <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long does a typical project take?</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, 
                while more complex applications can take several months. I'll provide a detailed timeline after our initial consultation.
              </p>
            </div>
            
            <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is your pricing structure?</h3>
              <p class="text-gray-600 dark:text-gray-400">
                I offer both project-based and hourly pricing options. The final cost depends on project requirements, complexity, 
                and timeline. Contact me for a personalized quote for your specific project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>