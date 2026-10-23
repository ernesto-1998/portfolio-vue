<template>
  <a :href="props.link" target="_blank">
    {{ props.text }}
  </a>
</template>
<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
a {
  background-color: var(--frontend-tag-color);
  padding: 10px 24px;
  border-radius: var(--border-radius-page);
  font-size: var(--type-secondary);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-compact);
  text-align: center;
  overflow-wrap: anywhere;
}

a:hover {
  cursor: pointer;
}
</style>
