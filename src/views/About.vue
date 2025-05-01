<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue';
import SkillCard from '@/components/about/SkillCard.vue';

// Skills data
const skills = [
  {
    title: 'Frontend Development',
    icon: 'i-carbon-application-web',
    skills: [
      'Vue.js / Nuxt.js',
      'React / Next.js',
      'TypeScript',
      'HTML5 / CSS3',
      'JavaScript ES6+',
      'TailwindCSS / UnoCSS',
    ],
  },
  {
    title: 'Backend Development',
    icon: 'i-carbon-server',
    skills: [
      'Node.js / Express',
      'RESTful APIs',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
    ],
  },
  {
    title: 'Design',
    icon: 'i-carbon-paint-brush',
    skills: [
      'UI/UX Design',
      'Responsive Design',
      'Figma / Adobe XD',
      'Wireframing',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    title: 'Tools & Others',
    icon: 'i-carbon-tools',
    skills: [
      'Git / GitHub',
      'Docker',
      'CI/CD',
      'Jest / Vitest',
      'Performance Optimization',
      'SEO Fundamentals',
    ],
  },
];

// Experience data
const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description:
      'Lead frontend development for enterprise clients, implementing modern architecture and best practices.',
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency',
    period: '2018 - 2021',
    description:
      'Developed responsive websites and web applications for clients across various industries.',
  },
  {
    title: 'Junior Developer',
    company: 'Startup Studio',
    period: '2016 - 2018',
    description:
      'Assisted in the development of web and mobile applications using various frontend technologies.',
  },
];

// Education data
const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Tech University',
    period: '2014 - 2016',
    description: 'Specialized in web technologies and user interface design.',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'State University',
    period: '2010 - 2014',
    description:
      'Focused on software engineering and development fundamentals.',
  },
];
</script>

<template>
  <div>
    <!-- About Hero -->
    <section class="py-32 pt-40 relative">
      <div
        class="absolute -z-10 inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900"
      ></div>
      <div class="container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About Me
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate web developer with a focus on creating beautiful,
              functional, and user-friendly websites.
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              With over 5 years of experience in the industry, I've had the
              privilege of working with various clients from startups to
              established businesses. My goal is always to deliver high-quality
              solutions that not only meet the client's requirements but also
              exceed their expectations.
            </p>
            <p class="text-gray-600 dark:text-gray-400">
              I believe that the best digital products come from a combination
              of technical excellence, thoughtful design, and a deep
              understanding of the user's needs.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-70"
              ></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Professional portrait"
                class="relative rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20">
      <div class="container">
        <SectionTitle
          title="My Skills"
          subtitle="Areas of expertise and technologies I work with"
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            v-for="skill in skills"
            :key="skill.title"
            :title="skill.title"
            :skills="skill.skills"
            :icon="skill.icon"
          />
        </div>
      </div>
    </section>

    <!-- Experience & Education -->
    <section class="py-20 bg-gray-100 dark:bg-gray-800">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Experience -->
          <div>
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Professional Experience
            </h2>

            <div
              class="relative border-l-2 border-primary-300 dark:border-primary-700 pl-6 space-y-12"
            >
              <div
                v-for="(exp, index) in experiences"
                :key="index"
                class="relative"
              >
                <div
                  class="absolute -left-9 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-800"
                ></div>
                <div>
                  <span
                    class="inline-block text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full mb-2"
                  >
                    {{ exp.period }}
                  </span>
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    {{ exp.title }}
                  </h3>
                  <p class="text-primary-600 dark:text-primary-400 mb-2">
                    {{ exp.company }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ exp.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div>
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Education
            </h2>

            <div
              class="relative border-l-2 border-secondary-300 dark:border-secondary-700 pl-6 space-y-12"
            >
              <div
                v-for="(edu, index) in education"
                :key="index"
                class="relative"
              >
                <div
                  class="absolute -left-9 w-4 h-4 rounded-full bg-secondary-500 border-4 border-white dark:border-gray-800"
                ></div>
                <div>
                  <span
                    class="inline-block text-sm font-medium bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 px-3 py-1 rounded-full mb-2"
                  >
                    {{ edu.period }}
                  </span>
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    {{ edu.degree }}
                  </h3>
                  <p class="text-secondary-600 dark:text-secondary-400 mb-2">
                    {{ edu.institution }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ edu.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials (Optional) -->
    <section class="py-20">
      <div class="container">
        <SectionTitle
          title="What People Say"
          subtitle="Testimonials from clients I've worked with"
        />

        <div class="grid md:grid-cols-3 gap-8">
          <div class="card p-6">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 italic">
              "Working with this developer was an absolute pleasure. They
              delivered our website on time and exceeded our expectations in
              terms of design and functionality."
            </p>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                John Smith
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-500">
                CEO, Tech Startup
              </p>
            </div>
          </div>

          <div class="card p-6">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 italic">
              "Their attention to detail and technical expertise helped us
              transform our outdated website into a modern, user-friendly
              platform that has significantly increased our conversions."
            </p>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Sarah Johnson
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-500">
                Marketing Director, E-commerce
              </p>
            </div>
          </div>

          <div class="card p-6">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4 italic">
              "Not only did they build a beautiful website for us, but they also
              provided valuable insights and suggestions that improved the
              overall user experience. Highly recommended!"
            </p>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                Michael Brown
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-500">
                Founder, Design Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
