<template>
  <svg :width="size" :height="size" viewBox="0 0 64 24" aria-hidden="true">
    <path
      fill="#cb3837"
      d="M0 0h64v18H32v6H20v-6H0V0zm4 4v10h8V6h4v8h4V4H4zm20 0v14h4v-4h8V4H24zm4 4h4v2h-4V8zm12-4v10h4V8h4v6h4V8h4v6h4V4H40z"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [String, Number], default: 32 },
  color: { type: String, default: 'currentColor' }
})
</script>
