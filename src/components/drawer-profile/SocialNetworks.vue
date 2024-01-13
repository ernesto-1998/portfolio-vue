<template>
  <div class="social-container" :style="{backgroundColor: defineColor}">
    <ul class="icons-list">
      <li v-for="icon in social" :key="icon.index" class="icons-li">
        <a :href="icon.link" :alt="icon.name" target="_blank" rel="noreferrer">
          <base-icon :icon-name="icon.name" :size="35" :color="'white'" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import social from '@/utils/social.js'
import BaseIcon from '../icons/BaseIcon.vue'

const props = defineProps({
  backColor: {
    type: Boolean,
    default: true,
  }
})

const defineColor = computed(() => (props.backColor ? 'var(--backtitle-color)' : 'var(--element-color)'))
</script>

<style scoped>
.social-container {
  width: fit-content;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  border-radius: 16px;
  color: var(--layout-color);
  margin: 0 auto;
}

.icons-list {
  padding: 10px 0;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  gap: 15px;
  overflow: auto;
}

.icons-list::-webkit-scrollbar {
  height: 7px;
  background: var(--page-color);
  border-radius: var(--border-radius-page);
}

::-webkit-scrollbar-thumb {
  background: var(--layout-color);
  border-radius: calc(15px / 2);
}

.icons-li {
  transition: 0.3s ease-in-out;
}

.icons-li:hover {
  transform: translateY(-5px);
}

.icons-li a {
  display: flex;
  align-items: center;
  height: fit-content;
}

@media (max-width: 1024px) {
  .social-container {
    padding: 5px 20px;
  }
}
</style>
