<template>
  <div class="general-container">
    <drawer-profile />
    <main-content />
  </div>
</template>

<script setup>
import DrawerProfile from './DrawerProfile.vue'
import MainContent from './MainContent.vue'

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

@media (max-width: 1024px) {
  .general-container {
    height: auto;
    min-height: 100dvh;
    padding: 16px;
  }
}
</style>
