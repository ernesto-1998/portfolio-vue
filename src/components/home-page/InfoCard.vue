<template>
  <div class="info-container">
    <p>{{ text }}</p>
    <ul class="skills-list">
      <li class="skill-item"><span>Frontend: </span>{{ getFrontend }}</li>
      <li class="skill-item"><span>Backend: </span>{{ getBackend }}</li>
      <li class="skill-item"><span>Devops: </span>{{ getDevops }}</li>
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
  font-family: var(--text-font);
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
  font-weight: bold;
  font-size: 20px;
}
</style>
