<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/">
            <Logo />
          </router-link>
        </div>
        <div class="flex items-center space-x-4">
          <router-link to="/" class="hover:text-pink-600">Home</router-link>
          <router-link to="/products" class="hover:text-pink-600">Products</router-link>
          <router-link to="/about" class="hover:text-pink-600">About</router-link>
          <router-link to="/contact" class="hover:text-pink-600">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Logo from '@/components/common/Logo.vue'
</script>