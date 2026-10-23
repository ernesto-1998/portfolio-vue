<template>
  <ul class="nav-container">
    <li v-for="item in nav" :key="item.name" class="nav-item">
      <router-link :to="{ name: item.link }" class="nav-link">
        <base-icon :icon-name="item.name" color="white" size="30" />
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import nav from '@/utils/nav-menu.js'
import BaseIcon from '../icons/BaseIcon.vue'
</script>

<style scoped>
.nav-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 15px;
  background-color: var(--backtitle-color);
  padding: 7px 10px;
  border-radius: var(--border-radius-title);
}

.nav-link {
  padding: 5px 5px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--backtitle-color);
  border-radius: var(--border-radius-title);
  border: 2px solid var(--layout-color);
  font-size: var(--type-secondary);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-compact);
  text-align: center;
  color: var(--layout-color);
  transition: 0.3s ease-in-out;
}

.router-active-class {
  background-color: var(--element-color);
  transform: translateY(-5px);
}

.nav-link:hover {
  cursor: pointer;
  background-color: var(--element-color);
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .nav-link {
    min-width: 50px;
  }
  .nav-link > span {
    display: none;
  }
}

@media (max-width: 280px) {
  .nav-container {
    flex-wrap: wrap;
    gap: 6px;
  }
}
</style>
