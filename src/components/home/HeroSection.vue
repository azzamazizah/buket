<template>
  <section class="relative h-[500px]">
    <div class="absolute inset-0 overflow-hidden">
      <img 
        src="https://source.unsplash.com/1600x900/?flower,bouquet" 
        alt="Beautiful floral background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-pink-900/30 to-pink-800/20 backdrop-blur-[2px]"></div>
    </div>
    <div class="relative h-full flex items-center justify-center text-center text-white">
      <div class="max-w-3xl px-4">
        <Logo class="mx-auto mb-6" text="Welcome to Zahra Bouquet" />
        <p class="text-xl mb-8">Beautiful flowers for every special moment in your life</p>
        <router-link 
          to="/products" 
          class="btn btn-primary text-lg px-8 py-3 bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
        >
          Shop Now
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import Logo from '@/components/common/Logo.vue'
</script>