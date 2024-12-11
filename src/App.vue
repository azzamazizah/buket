<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>