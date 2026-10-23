<template>
  <div class="info-container">
    <p class="type-body">{{ text }}</p>
    <ul class="skills-list">
      <li class="skill-item"><span class="type-subtitle">Frontend:</span> {{ getFrontend }}</li>
      <li class="skill-item"><span class="type-subtitle">Backend:</span> {{ getBackend }}</li>
      <li class="skill-item"><span class="type-subtitle">Devops:</span> {{ getDevops }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import skills from '@/utils/skills'

defineProps({
  text: {
    type: String,
    required: true
  }
})

const getFrontend = computed(() => {
  return skills['frontend'].join(', ')
})
const getBackend = computed(() => {
  return skills['backend'].join(', ')
})
const getDevops = computed(() => {
  return skills['devops'].join(', ')
})
</script>

<style scoped>
.info-container {
  padding: 15px;
  background-color: var(--element-color);
  color: var(--layout-color);
  border-radius: var(--border-radius-page);
  height: fit-content;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: var(--backtitle-color);
  border-radius: var(--border-radius-title);
}

.skill-item > span {
  display: block;
  margin-bottom: 4px;
}
</style>
