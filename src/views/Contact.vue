<template>
  <main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-900">123 Flower Street</p>
                <p class="text-gray-600">Jakarta, Indonesia</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-900">(123) 456-7890</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-gray-900">info@zahrabouquet.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Send us a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              >
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              >
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', form)
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>