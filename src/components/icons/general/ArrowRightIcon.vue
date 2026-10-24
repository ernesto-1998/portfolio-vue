<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 12h15m-6-6 6 6-6 6"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [String, Number], default: 20 },
  color: { type: String, default: 'currentColor' }
})
</script>
