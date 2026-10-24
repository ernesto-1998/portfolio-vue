<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="3" :stroke="color" stroke-width="1.8" />
    <path
      d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20m.5-14a3 3 0 0 1 0 5.8M16 13a4.8 4.8 0 0 1 4.5 4.8V20"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
    />
  </svg>
</template>
<script setup>
defineProps({
  size: { type: [String, Number], default: 24 },
  color: { type: String, default: 'currentColor' }
})
</script>
