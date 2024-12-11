<template>
  <section class="relative h-[500px]">
    <div class="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg"
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

    <!-- Navigation Dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-colors duration-300"
        :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Logo from '@/components/common/Logo.vue'

const slides = [
  {
    id: 1,
    image: 'https://source.unsplash.com/1600x900/?flower,roses',
    alt: 'Beautiful roses arrangement',
    quote: 'Every flower is a soul blossoming in nature'
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/1600x900/?flower,tulips',
    alt: 'Colorful tulips bouquet',
    quote: 'Where flowers bloom, so does hope'
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/1600x900/?flower,sunflowers',
    alt: 'Bright sunflowers',
    quote: 'Let your dreams blossom like flowers in spring'
  }
]

const currentSlide = ref(0)
let slideInterval

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000) // Change slide every 5 seconds
}

onMounted(() => {
  startSlideShow()
})

onBeforeUnmount(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.btn {
  @apply inline-block rounded-lg;
}
</style>