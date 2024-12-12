<template>
  <div class="flex items-center space-x-4">
    <div class="relative">
      <svg 
        class="w-20 h-20" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Simple Flower Design -->
        <g class="fill-[#8B4513]">
          <!-- Petals -->
          <circle cx="50" cy="30" r="15" />
          <circle cx="30" cy="50" r="15" />
          <circle cx="70" cy="50" r="15" />
          <circle cx="50" cy="70" r="15" />
          
          <!-- Center -->
          <circle cx="50" cy="50" r="12" class="fill-[#D2691E]" />
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