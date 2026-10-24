<template>
  <svg :width="size" :height="size" viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="#512bd4" />
    <text
      x="16"
      y="19.5"
      text-anchor="middle"
      fill="#fff"
      font-family="Arial, sans-serif"
      font-size="10"
      font-weight="700"
    >
      .NET
    </text>
  </svg>
</template>
<script setup>
defineProps({
  size: { type: [String, Number], default: 24 },
  color: { type: String, default: 'currentColor' }
})
</script>
