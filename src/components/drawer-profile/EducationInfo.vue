<template>
  <div class="education-container">
    <h3>{{ object.title }}</h3>
    <div class="separator"></div>
    <ul class="education-list">
      <li v-for="(item, index) in object.items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  object: {
    type: Object,
    required: true,
  }
})
</script>
<style scoped>
.education-container {
  max-width: 250px;
  padding: 10px 12px;
  background-color: var(--backtitle-color);
  border-radius: var(--border-radius-title);
  font-family: var(--text-font);
  color: var(--layout-color);
}

.separator {
  width: 100%;
  height: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: var(--layout-color);
}

.education-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
}

.education-list > li::before {
  content: '🤖';
  margin-right: 5px;
}
</style>
