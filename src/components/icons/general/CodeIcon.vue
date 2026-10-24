<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14"
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
