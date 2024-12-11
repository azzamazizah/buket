<template>
  <div class="flex items-center space-x-3">
    <div class="relative">
      <svg 
        class="w-14 h-14" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Background Circle -->
        <circle cx="50" cy="50" r="48" class="stroke-pink-600" stroke-width="2" />
        
        <!-- Modern Flower Design -->
        <g class="fill-pink-600">
          <!-- Center -->
          <circle cx="50" cy="50" r="8" />
          
          <!-- Petals -->
          <path d="M50 20C52 20 54 22 54 35C54 48 50 50 50 50C50 50 46 48 46 35C46 22 48 20 50 20Z" />
          <path d="M50 80C48 80 46 78 46 65C46 52 50 50 50 50C50 50 54 52 54 65C54 78 52 80 50 80Z" />
          <path d="M20 50C20 48 22 46 35 46C48 46 50 50 50 50C50 50 48 54 35 54C22 54 20 52 20 50Z" />
          <path d="M80 50C80 52 78 54 65 54C52 54 50 50 50 50C50 50 52 46 65 46C78 46 80 48 80 50Z" />
          
          <!-- Decorative Elements -->
          <circle cx="50" cy="25" r="2" class="opacity-60" />
          <circle cx="50" cy="75" r="2" class="opacity-60" />
          <circle cx="25" cy="50" r="2" class="opacity-60" />
          <circle cx="75" cy="50" r="2" class="opacity-60" />
        </g>
      </svg>
      
      <!-- Subtle Animation -->
      <div class="absolute inset-0 animate-pulse opacity-20">
        <svg 
          class="w-14 h-14" 
          viewBox="0 0 100 100" 
          fill="none"
        >
          <circle cx="50" cy="50" r="48" class="stroke-pink-400" stroke-width="1" />
        </svg>
      </div>
    </div>
    
    <!-- Modern Typography -->
    <div class="flex flex-col">
      <span class="text-2xl font-light text-pink-600 tracking-wider leading-tight">{{ text }}</span>
      <span class="text-xs uppercase tracking-[0.2em] text-pink-400 font-medium">Flower Boutique</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Zahra'
  }
})
</script>

<style scoped>
@keyframes subtle-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-pulse {
  animation: subtle-rotate 8s linear infinite;
}
</style>