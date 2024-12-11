<template>
  <div class="flex items-center space-x-3">
    <div class="relative">
      <svg 
        class="w-16 h-16" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Background Circles -->
        <circle cx="50" cy="50" r="48" class="stroke-pink-600" stroke-width="2" />
        <circle cx="50" cy="50" r="44" class="stroke-rose-400" stroke-width="1" opacity="0.6" />
        
        <!-- Flower Design -->
        <g>
          <!-- Center -->
          <circle cx="50" cy="50" r="10" class="fill-pink-600" />
          <circle cx="50" cy="50" r="7" class="fill-rose-400" />
          
          <!-- Main Petals -->
          <g class="fill-pink-600">
            <!-- Top Petal -->
            <path d="M50 15C55 15 60 20 60 35C60 45 50 50 50 50C50 50 40 45 40 35C40 20 45 15 50 15Z" />
            <!-- Right Petal -->
            <path d="M85 50C85 55 80 60 65 60C55 60 50 50 50 50C50 50 55 40 65 40C80 40 85 45 85 50Z" />
            <!-- Bottom Petal -->
            <path d="M50 85C45 85 40 80 40 65C40 55 50 50 50 50C50 50 60 55 60 65C60 80 55 85 50 85Z" />
            <!-- Left Petal -->
            <path d="M15 50C15 45 20 40 35 40C45 40 50 50 50 50C50 50 45 60 35 60C20 60 15 55 15 50Z" />
          </g>
          
          <!-- Secondary Petals -->
          <g class="fill-rose-400">
            <!-- Top Right -->
            <path d="M67 33C72 28 75 30 77 32C79 34 80 37 75 42C70 47 65 45 63 43C61 41 62 38 67 33Z" />
            <!-- Bottom Right -->
            <path d="M67 67C72 72 75 70 77 68C79 66 80 63 75 58C70 53 65 55 63 57C61 59 62 62 67 67Z" />
            <!-- Bottom Left -->
            <path d="M33 67C28 72 25 70 23 68C21 66 20 63 25 58C30 53 35 55 37 57C39 59 38 62 33 67Z" />
            <!-- Top Left -->
            <path d="M33 33C28 28 25 30 23 32C21 34 20 37 25 42C30 47 35 45 37 43C39 41 38 38 33 33Z" />
          </g>
          
          <!-- Decorative Elements -->
          <g class="fill-pink-300">
            <circle cx="50" cy="20" r="3" />
            <circle cx="80" cy="50" r="3" />
            <circle cx="50" cy="80" r="3" />
            <circle cx="20" cy="50" r="3" />
          </g>
        </g>
      </svg>
      
      <!-- Subtle Animations -->
      <div class="absolute inset-0 animate-pulse opacity-20">
        <svg 
          class="w-16 h-16" 
          viewBox="0 0 100 100" 
          fill="none"
        >
          <circle cx="50" cy="50" r="48" class="stroke-pink-400" stroke-width="1" />
        </svg>
      </div>
    </div>
    
    <!-- Modern Typography with Gradient -->
    <div class="flex flex-col">
      <span class="text-3xl font-light tracking-wider leading-tight bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
        {{ text }}
      </span>
      <span class="text-xs uppercase tracking-[0.2em] text-rose-400 font-medium">
        Flower Boutique
      </span>
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
  animation: subtle-rotate 12s linear infinite;
}
</style>