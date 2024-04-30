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
  padding: 10px 75px;
  border-radius: var(--border-radius-page);
  font-family: var(--title-font);
  font-size: 20px;
  font-weight: 700;
}

a:hover {
  cursor: pointer;
}
</style>
