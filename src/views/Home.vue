<template>
  <main>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="bg-pink-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fresh Flowers</h3>
            <p class="text-gray-600">We source our flowers daily to ensure maximum freshness</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p class="text-gray-600">Same-day delivery available for local orders</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p class="text-gray-600">100% satisfaction guaranteed on all orders</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import ProductCard from '@/components/products/ProductCard.vue'
import { featuredProducts } from '@/data/products'
</script>