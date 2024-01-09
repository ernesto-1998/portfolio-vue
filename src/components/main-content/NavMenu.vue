<template>
  <ul class="nav-container">
    <li v-for="item in nav" :key="item.name" class="nav-item">
      <router-link :to="{ name: item.link }" class="nav-link">
        <base-icon :icon-name="item.name" color="white" size="30" />
        <h3>{{ item.title }}</h3>
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
  font-family: var(--title-font);
  font-weight: 700;
  font-size: 13px;
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
  .nav-link > h3 {
    display: none;
  }
}
</style>
