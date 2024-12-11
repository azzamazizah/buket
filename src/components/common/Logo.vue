<template>
  <div class="flex items-center space-x-2">
    <svg 
      class="w-8 h-8 text-pink-600" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 4C12 4 14 6 14 8C14 10 12 11 12 11C12 11 10 10 10 8C10 6 12 4 12 4Z" 
        fill="currentColor"
      />
      <path 
        d="M18 8C18 8 16 10 14 10C12 10 11 8 11 8C11 8 12 6 14 6C16 6 18 8 18 8Z" 
        fill="currentColor"
      />
      <path 
        d="M6 8C6 8 8 10 10 10C12 10 13 8 13 8C13 8 12 6 10 6C8 6 6 8 6 8Z" 
        fill="currentColor"
      />
      <path 
        d="M12 12C12 12 13 14 12 16C11 18 9 19 9 19C9 19 8 17 9 15C10 13 12 12 12 12Z" 
        fill="currentColor"
      />
      <path 
        d="M12 12C12 12 11 14 12 16C13 18 15 19 15 19C15 19 16 17 15 15C14 13 12 12 12 12Z" 
        fill="currentColor"
      />
    </svg>
    <span class="text-2xl font-bold text-pink-600">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Zahra Bouquet'
  }
})
</script>