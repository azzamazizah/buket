<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="text-gray-600 mt-1">{{ product.description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-pink-600 font-bold">{{ formatPrice(product.price) }}</span>
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatPrice } from '@/utils/price'

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>