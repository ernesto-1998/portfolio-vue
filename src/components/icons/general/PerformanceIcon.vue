<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 20h18M5 16h4v4H5zm5-6h4v10h-4zm5-6h4v16h-4z"
      :stroke="color"
      stroke-width="1.8"
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
