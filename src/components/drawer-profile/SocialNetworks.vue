<template>
  <div class="social-container">
    <!-- <h1 class="title">Social Networks!</h1> -->
    <ul class="icons-list">
      <li v-for="icon in social" :key="icon.index" class="icons-li">
        <a :href="icon.link" alt="Social Icon" target="_blank" rel="noreferrer"
          ><img :src="icon.path" alt="social icon"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import social from '@/utils/social.js'
</script>

<style scoped>
.social-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--backtitle-color);
  padding: 10px;
  margin-top: 15px;
  border-radius: 16px;
  align-items: center;
  color: var(--layout-color);
}

.title {
  font-family: var(--h2-font);
}

.icons-list {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 15px;
  margin-top: 10px;
}

.icons-li img {
  width: 50px;
}
</style>
