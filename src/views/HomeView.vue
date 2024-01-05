<template>
  <div class="general-container">
    <drawer-profile />
    <main-content />
  </div>
</template>

<script setup>
import DrawerProfile from '@/components/pages/DrawerProfile.vue'
import MainContent from '@/components/pages/MainContent.vue'
</script>

<style scoped>
.general-container {
  display: flex;
  gap: 20px;
  padding: 25px;
}
</style>
