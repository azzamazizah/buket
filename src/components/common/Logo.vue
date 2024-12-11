<template>
  <div class="flex items-center space-x-2">
    <svg 
      class="w-12 h-12 text-pink-600" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Center flower -->
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      
      <!-- Main petals -->
      <path 
        d="M12 5C12 5 14 7 14 9C14 11 12 12 12 12C12 12 10 11 10 9C10 7 12 5 12 5Z" 
        fill="currentColor"
      />
      <path 
        d="M19 12C19 12 17 14 15 14C13 14 12 12 12 12C12 12 13 10 15 10C17 10 19 12 19 12Z" 
        fill="currentColor"
      />
      <path 
        d="M12 19C12 19 10 17 10 15C10 13 12 12 12 12C12 12 14 13 14 15C14 17 12 19 12 19Z" 
        fill="currentColor"
      />
      <path 
        d="M5 12C5 12 7 14 9 14C11 14 12 12 12 12C12 12 11 10 9 10C7 10 5 12 5 12Z" 
        fill="currentColor"
      />
      
      <!-- Diagonal petals -->
      <path 
        d="M16.5 7.5C16.5 7.5 15.5 9.5 13.5 9.5C11.5 9.5 10.5 7.5 10.5 7.5C10.5 7.5 11.5 5.5 13.5 5.5C15.5 5.5 16.5 7.5 16.5 7.5Z" 
        fill="currentColor"
        opacity="0.7"
      />
      <path 
        d="M16.5 16.5C16.5 16.5 14.5 15.5 14.5 13.5C14.5 11.5 16.5 10.5 16.5 10.5C16.5 10.5 18.5 11.5 18.5 13.5C18.5 15.5 16.5 16.5 16.5 16.5Z" 
        fill="currentColor"
        opacity="0.7"
      />
      <path 
        d="M7.5 16.5C7.5 16.5 9.5 15.5 9.5 13.5C9.5 11.5 7.5 10.5 7.5 10.5C7.5 10.5 5.5 11.5 5.5 13.5C5.5 15.5 7.5 16.5 7.5 16.5Z" 
        fill="currentColor"
        opacity="0.7"
      />
      <path 
        d="M7.5 7.5C7.5 7.5 8.5 9.5 10.5 9.5C12.5 9.5 13.5 7.5 13.5 7.5C13.5 7.5 12.5 5.5 10.5 5.5C8.5 5.5 7.5 7.5 7.5 7.5Z" 
        fill="currentColor"
        opacity="0.7"
      />
      
      <!-- Small decorative dots -->
      <circle cx="12" cy="4" r="0.5" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="20" r="0.5" fill="currentColor" opacity="0.5" />
      <circle cx="4" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
    </svg>
    <span class="text-2xl font-bold text-pink-600 tracking-wide">{{ text }}</span>
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