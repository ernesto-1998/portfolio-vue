<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M13 5h6v6m0-6-9 9M19 13v6H5V5h6"
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
