<template>
  <div class="general-container">
    <drawer-profile />
    <main-content />
  </div>
</template>

<script setup>
import DrawerProfile from './DrawerProfile.vue'
import MainContent from './MainContent.vue'
</script>

<style scoped>
.general-container {
  height: 100vh;
  display: flex;
  gap: 20px;
  padding: 25px;
}

@media (max-width: 768px) {
  .general-container {
    flex-wrap: wrap;
    padding: 0;
  }
}
</style>
