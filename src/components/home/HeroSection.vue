<template>
  <section class="relative h-[500px] overflow-hidden">
    <!-- Slider Container -->
    <div class="relative h-full">
      <TransitionGroup 
        name="slide" 
        tag="div"
        class="h-full"
      >
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <!-- Background Image -->
          <img 
            :src="slide.image" 
            :alt="slide.alt"
            class="w-full h-full object-cover"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-pink-900/30 to-pink-800/20 backdrop-blur-[2px]"></div>
          
          <!-- Content -->
          <div class="relative h-full flex items-center justify-center text-center text-white">
            <div class="max-w-3xl px-4">
              <Logo class="mx-auto mb-8" :text="slide.title" />
              <div class="relative mb-8">
                <p class="text-2xl italic font-light leading-relaxed">
                  "{{ slide.quote }}"
                </p>
                <div class="absolute -top-4 left-0 w-full h-[1px] bg-white/20"></div>
                <div class="absolute -bottom-4 left-0 w-full h-[1px] bg-white/20"></div>
              </div>
              <router-link 
                to="/products" 
                class="btn btn-primary text-lg px-8 py-3 bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
              >
                {{ slide.buttonText }}
              </router-link>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Navigation Arrows -->
    <button 
      @click="prevSlide" 
      class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
    >
      <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="nextSlide" 
      class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
    >
      <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Navigation Dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="goToSlide(index)"
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
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',
    alt: 'Beautiful roses arrangement',
    title: 'Zahra',
    quote: 'Every flower is a soul blossoming in nature',
    buttonText: 'Explore Roses'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg',
    alt: 'Elegant tulips bouquet',
    title: 'Zahra',
    quote: 'Where flowers bloom, so does hope',
    buttonText: 'View Collection'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg',
    alt: 'Vibrant sunflowers',
    title: 'Zahra',
    quote: 'Let your dreams blossom like flowers in spring',
    buttonText: 'Shop Now'
  }
]

const currentSlide = ref(0)
let slideInterval

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startSlideShow = () => {
  slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
}

const stopSlideShow = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
}

onMounted(() => {
  startSlideShow()
})

onBeforeUnmount(() => {
  stopSlideShow()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(10%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.btn {
  @apply inline-block rounded-lg;
}

/* Tambahan animasi untuk quotes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.max-w-3xl p {
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}
</style>