<template>
  <div class="flex items-center space-x-4">
    <div class="relative">
      <svg 
        class="w-20 h-20" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Ornamental Border -->
        <circle cx="50" cy="50" r="48" class="stroke-[#8B4513]" stroke-width="1.5" />
        <circle cx="50" cy="50" r="45" class="stroke-[#8B4513]" stroke-width="0.5" opacity="0.7" />
        
        <!-- Decorative Corner Elements -->
        <path d="M20 20C25 25 30 20 35 15M15 35C20 30 20 25 25 20" class="stroke-[#8B4513]" stroke-width="1" fill="none" />
        <path d="M80 20C75 25 70 20 65 15M85 35C80 30 80 25 75 20" class="stroke-[#8B4513]" stroke-width="1" fill="none" />
        <path d="M20 80C25 75 30 80 35 85M15 65C20 70 20 75 25 80" class="stroke-[#8B4513]" stroke-width="1" fill="none" />
        <path d="M80 80C75 75 70 80 65 85M85 65C80 70 80 75 75 80" class="stroke-[#8B4513]" stroke-width="1" fill="none" />
        
        <!-- Classic Flower Design -->
        <g class="fill-[#8B4513]">
          <!-- Center -->
          <circle cx="50" cy="50" r="6" />
          <circle cx="50" cy="50" r="4" class="fill-[#D2691E]" />
          
          <!-- Main Petals - Classical Style -->
          <path d="M50 20C55 20 57 25 57 35C57 45 50 48 50 48C50 48 43 45 43 35C43 25 45 20 50 20Z" />
          <path d="M50 80C45 80 43 75 43 65C43 55 50 52 50 52C50 52 57 55 57 65C57 75 55 80 50 80Z" />
          <path d="M20 50C20 45 25 43 35 43C45 43 48 50 48 50C48 50 45 57 35 57C25 57 20 55 20 50Z" />
          <path d="M80 50C80 55 75 57 65 57C55 57 52 50 52 50C52 50 55 43 65 43C75 43 80 45 80 50Z" />
          
          <!-- Diagonal Petals -->
          <path d="M29 29C32 32 32 35 30 40C28 45 25 45 25 45C25 45 25 42 27 37C29 32 29 29 29 29Z" opacity="0.8" />
          <path d="M71 29C68 32 68 35 70 40C72 45 75 45 75 45C75 45 75 42 73 37C71 32 71 29 71 29Z" opacity="0.8" />
          <path d="M29 71C32 68 32 65 30 60C28 55 25 55 25 55C25 55 25 58 27 63C29 68 29 71 29 71Z" opacity="0.8" />
          <path d="M71 71C68 68 68 65 70 60C72 55 75 55 75 55C75 55 75 58 73 63C71 68 71 71 71 71Z" opacity="0.8" />
        </g>
        
        <!-- Ornamental Details -->
        <g class="stroke-[#8B4513]" stroke-width="0.5" fill="none">
          <path d="M50 15C50 15 45 25 50 35C55 25 50 15 50 15" />
          <path d="M50 85C50 85 45 75 50 65C55 75 50 85 50 85" />
          <path d="M15 50C15 50 25 45 35 50C25 55 15 50 15 50" />
          <path d="M85 50C85 50 75 45 65 50C75 55 85 50 85 50" />
        </g>
      </svg>
    </div>
    
    <!-- Classical Typography -->
    <div class="flex flex-col items-start">
      <h1 class="font-serif text-3xl text-[#8B4513] tracking-wide leading-tight">
        {{ text }}
      </h1>
      <div class="flex items-center space-x-2 mt-1">
        <div class="h-[1px] w-4 bg-[#8B4513] opacity-50"></div>
        <span class="text-xs uppercase tracking-[0.3em] text-[#8B4513] font-medium">
          Flower Boutique
        </span>
        <div class="h-[1px] w-4 bg-[#8B4513] opacity-50"></div>
      </div>
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
/* Custom font for classical look */
.font-serif {
  font-family: "Playfair Display", "Times New Roman", serif;
}
</style>