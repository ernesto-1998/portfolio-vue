<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 2.5h7l4 4v14H7a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2Zm7 0v4h4M9 12h6m-6 4h6"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup>
defineProps({
  size: { type: [String, Number], default: 24 },
  color: { type: String, default: 'currentColor' }
})
</script>
