<template>
  <div class="icons-container">
    <div class="title-wrapper">
      <h2>{{ title }}</h2>
    </div>
    <ul class="icons-list">
      <li v-for="icon in skills_icons" :key="icon.name" class="icon-item">
        <base-icon :icon-name="icon.name" :size="size" />
        <span>{{ icon.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import skills_icons from '@/utils/skills-icons.js'
import BaseIcon from '../icons/BaseIcon.vue'

const size = ref(50)

defineProps({
  title: {
    type: String,
    default: 'My Favorite Technologies'
  }
})
</script>

<style scoped>
.icons-container {
  color: var(--layout-color);
}
.title-wrapper {
  text-align: center;
}

.title-wrapper > h2 {
  display: inline;
  font-family: var(--title-font);
  font-weight: 700;
  color: var(--layout-color);
  position: relative;
}

.title-wrapper > h2::after {
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: var(--layout-color);
  bottom: -3px;
  left: 0;
}

.icons-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 25px 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-family: var(--text-font);
  transition: 0.2s ease-in-out;
}

.icon-item:hover {
  cursor: pointer;
  transform: translateY(-5px) rotate(5grad);
}
</style>
