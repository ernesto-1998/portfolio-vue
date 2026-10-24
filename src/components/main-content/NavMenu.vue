<template>
  <nav aria-label="Main navigation">
    <ul class="nav-container">
      <li v-for="item in nav" :key="item.name">
        <router-link :to="{ name: item.link }" class="nav-link">
          <base-icon :icon-name="item.name" color="currentColor" :size="23" aria-hidden="true" />
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import nav from '@/utils/nav-menu.js'
import BaseIcon from '@/components/icons/BaseIcon.vue'
</script>

<style scoped>
nav {
  max-width: 100%;
}
.nav-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  max-width: 100%;
  padding: 5px;
  border: 1px solid rgba(181, 142, 245, 0.38);
  border-radius: 13px;
  background: #1b103f;
  list-style: none;
}
.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 44px;
  padding: 8px 14px;
  border-radius: 10px;
  color: white;
  font-size: var(--type-secondary);
  font-weight: var(--weight-semibold);
  line-height: 1.2;
  white-space: nowrap;
  transition: background 180ms ease;
}
.nav-link:hover,
.router-active-class {
  background: #3b286c;
}
.nav-link:focus-visible {
  outline: 3px solid #ddc9ff;
  outline-offset: 2px;
}
@media (max-width: 520px) {
  .nav-link {
    min-width: 48px;
    padding: 9px;
  }
  .nav-link span {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
</style>
