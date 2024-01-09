<template>
  <div class="social-container">
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
import social from '@/utils/social.js'
import BaseIcon from '../icons/BaseIcon.vue'
</script>

<style scoped>
.social-container {
  display: flex;
  justify-content: center;
  background-color: var(--backtitle-color);
  padding: 0 15px;
  border-radius: 16px;
  color: var(--layout-color);
}

/* .title {
  font-family: var(--h2-font);
} */

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
</style>
