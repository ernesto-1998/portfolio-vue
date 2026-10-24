<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14.5 5.5a5 5 0 0 0-6.2 6.2L3 17a2.1 2.1 0 0 0 3 3l5.3-5.3a5 5 0 0 0 6.2-6.2l-3.1 3.1-2.8-2.8 2.9-3.3Z"
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
