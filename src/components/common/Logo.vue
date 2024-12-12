<template>
  <div class="flex items-center space-x-4">
    <div class="relative">
      <svg 
        class="w-20 h-20" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Modern Abstract Flower -->
        <g transform="rotate(45, 50, 50)">
          <!-- Petals -->
          <rect x="45" y="15" width="10" height="70" rx="5" class="fill-[#8B4513]" />
          <rect x="15" y="45" width="70" height="10" rx="5" class="fill-[#8B4513]" />
          
          <!-- Center -->
          <circle cx="50" cy="50" r="10" class="fill-[#D2691E]" />
        </g>
      </svg>
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