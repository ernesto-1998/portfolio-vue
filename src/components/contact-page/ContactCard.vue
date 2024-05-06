<template>
  <ul class="contact-card">
    <li v-for="(item, index) in props.array" :key="index" class="contact-item">
      <base-icon :icon-name="item.icon_name" :color="item.color" :size="size" />
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>
<script setup>
import BaseIcon from '../icons/BaseIcon.vue'
const props = defineProps({
  array: {
    type: Array,
    required: true
  }
})
</script>
<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  gap: var(--page-gap);
  background-color: var(--element-color);
  border-radius: var(--border-radius-page);
  padding: var(--page-gap);
  font-family: var(--title-font);
  color: var(--layout-color);
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
</style>
