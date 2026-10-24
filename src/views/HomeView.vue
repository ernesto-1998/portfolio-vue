<template>
  <div class="general-container" :class="{ 'home-layout': isHome }">
    <drawer-profile />
    <main-content />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DrawerProfile from './DrawerProfile.vue'
import MainContent from './MainContent.vue'

const route = useRoute()
const isHome = computed(() => route.name === 'home')

if ('virtualKeyboard' in navigator) {
  navigator.virtualKeyboard.overlaysContent = true
}
</script>

<style scoped>
.general-container {
  height: 100dvh;
  display: flex;
  gap: 20px;
  padding: 18px;
}
.home-layout {
  height: auto;
  min-height: 100dvh;
  align-items: flex-start;
}

@media (max-width: 1024px) {
  .general-container {
    padding: 16px;
  }
}
</style>
