<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 5l14 14M19 5 5 19" :stroke="color" stroke-width="2" stroke-linecap="round" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [String, Number], default: 20 },
  color: { type: String, default: 'currentColor' }
})
</script>
