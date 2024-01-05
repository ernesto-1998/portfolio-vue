<template>
  <div class="container">
    <img :src="imgUrl" alt="portfolio profile picture" />
    <div class="profile-title">
      <h2>{{ profileTitle }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  profileTitle: {
    type: String,
    default: 'Ernesto Magaña'
  }
})
</script>

<style scoped>
img {
  border-radius: var(--border-radius-page);
}

.container {
  position: relative;
}

.profile-title {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 5px 10px;
  border-bottom-left-radius: var(--border-radius-title);
  border-bottom-right-radius: var(--border-radius-title);
  background-color: var(--backtitle-color);
  text-align: center;
  color: var(--layout-color);
}
</style>
