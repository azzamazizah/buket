<template>
  <main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold mb-8">Our Products</h1>
    
    <!-- Filters -->
    <div class="mb-8 flex flex-wrap gap-4">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 rounded-full',
          selectedCategory === category ? 'bg-pink-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/products/ProductCard.vue'
import { products, categories } from '@/data/products'

const selectedCategory = ref('All')

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products
  }
  return products.filter(product => product.category === selectedCategory.value)
})
</script>