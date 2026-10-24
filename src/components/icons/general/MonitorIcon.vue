<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="1.5" :stroke="color" stroke-width="1.8" />
    <path d="M12 17v4m-5 0h10" :stroke="color" stroke-width="1.8" stroke-linecap="round" />
  </svg>
</template>
<script setup>
defineProps({
  size: { type: [String, Number], default: 24 },
  color: { type: String, default: 'currentColor' }
})
</script>
