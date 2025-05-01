<template>
  <div>
    <!-- Header -->
    <section class="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p class="text-xl opacity-90 max-w-2xl">
          Get to know more about me, my background, and what drives my passion for web development.
        </p>
      </div>
    </section>
    
    <!-- Main content -->
    <section class="section">
      <div class="container">
        <div class="card max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Image -->
            <div class="w-full md:w-1/3">
              <div class="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
                  alt="Profile Photo"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- Bio -->
            <div class="w-full md:w-2/3">
              <h2 class="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">My Story</h2>
              
              <p class="mb-4 text-gray-700 dark:text-gray-300">
                Hello! I'm Your Name, a web developer based in [Your Location]. With [X] years of experience in
                web development, I've worked on various projects ranging from small business websites to complex
                web applications.
              </p>
              
              <p class="mb-4 text-gray-700 dark:text-gray-300">
                My journey in web development began when I was studying [Your Background]. I was fascinated by
                the ability to create something from scratch and see it come to life on the internet, accessible
                to people around the world.
              </p>
              
              <p class="mb-4 text-gray-700 dark:text-gray-300">
                What sets me apart is my attention to detail and my commitment to creating websites that are not just
                visually appealing, but also functional, accessible, and optimized for performance.
              </p>
              
              <h3 class="text-xl font-bold mt-8 mb-4 text-primary-600 dark:text-primary-400">Education & Training</h3>
              
              <ul class="space-y-4">
                <li class="flex gap-4">
                  <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center shrink-0">
                    <span class="text-primary-600 dark:text-primary-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 class="font-bold">Bachelor's Degree in Computer Science</h4>
                    <p class="text-gray-600 dark:text-gray-400">University Name, 2017-2021</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center shrink-0">
                    <span class="text-primary-600 dark:text-primary-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 class="font-bold">Frontend Development Certification</h4>
                    <p class="text-gray-600 dark:text-gray-400">Platform Name, 2022</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center shrink-0">
                    <span class="text-primary-600 dark:text-primary-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 class="font-bold">UI/UX Design Course</h4>
                    <p class="text-gray-600 dark:text-gray-400">Design School, 2023</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experience -->
    <section class="section bg-gray-50 dark:bg-gray-900">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 pb-8">
            <!-- Experience 1 -->
            <div class="mb-12 relative">
              <div class="absolute -left-10 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-gray-900"></div>
              
              <div class="card">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 class="text-xl font-bold">Senior Frontend Developer</h3>
                  <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    2022 - Present
                  </span>
                </div>
                <h4 class="text-lg text-gray-600 dark:text-gray-400 mb-4">Company Name</h4>
                <p class="text-gray-700 dark:text-gray-300">
                  Led the frontend development of the company's flagship product, resulting in a 40% increase in user engagement.
                  Implemented responsive designs, optimized performance, and mentored junior developers.
                </p>
              </div>
            </div>
            
            <!-- Experience 2 -->
            <div class="mb-12 relative">
              <div class="absolute -left-10 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-gray-900"></div>
              
              <div class="card">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 class="text-xl font-bold">Frontend Developer</h3>
                  <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    2020 - 2022
                  </span>
                </div>
                <h4 class="text-lg text-gray-600 dark:text-gray-400 mb-4">Previous Company</h4>
                <p class="text-gray-700 dark:text-gray-300">
                  Developed and maintained multiple client websites, ensuring cross-browser compatibility and mobile responsiveness.
                  Collaborated with designers to implement UI/UX improvements that increased conversion rates by 25%.
                </p>
              </div>
            </div>
            
            <!-- Experience 3 -->
            <div class="relative">
              <div class="absolute -left-10 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-gray-900"></div>
              
              <div class="card">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 class="text-xl font-bold">Web Development Intern</h3>
                  <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    2019 - 2020
                  </span>
                </div>
                <h4 class="text-lg text-gray-600 dark:text-gray-400 mb-4">Internship Company</h4>
                <p class="text-gray-700 dark:text-gray-300">
                  Assisted in the development of client websites and gained hands-on experience with HTML, CSS, and JavaScript.
                  Worked closely with senior developers to learn best practices and improve coding skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Personal Interests -->
    <section class="section">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">Personal Interests</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center p-8 hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-6">
              <span class="i-mdi-code-tags text-primary-600 dark:text-primary-400 text-2xl"></span>
            </div>
            <h3 class="text-xl font-bold mb-4">Coding</h3>
            <p class="text-gray-700 dark:text-gray-300">
              I love exploring new technologies and frameworks, building side projects, and contributing to open-source.
            </p>
          </div>
          
          <div class="card text-center p-8 hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-6">
              <span class="i-mdi-camera text-primary-600 dark:text-primary-400 text-2xl"></span>
            </div>
            <h3 class="text-xl font-bold mb-4">Photography</h3>
            <p class="text-gray-700 dark:text-gray-300">
              Capturing moments and scenes through photography helps me see the world from different perspectives.
            </p>
          </div>
          
          <div class="card text-center p-8 hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-6">
              <span class="i-mdi-book-open-page-variant text-primary-600 dark:text-primary-400 text-2xl"></span>
            </div>
            <h3 class="text-xl font-bold mb-4">Reading</h3>
            <p class="text-gray-700 dark:text-gray-300">
              I enjoy reading books on technology, design, and personal development to continuously improve my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>