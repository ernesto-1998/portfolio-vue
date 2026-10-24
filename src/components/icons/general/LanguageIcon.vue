<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 6h12M9 3v3m4 0c-.8 5.1-3.9 8.8-9 11m1-8c1.5 3.2 4.2 5.6 7.5 7M13 21l4-10 4 10m-6.5-3h5"
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
