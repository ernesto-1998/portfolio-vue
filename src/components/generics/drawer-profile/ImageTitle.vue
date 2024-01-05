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
        opacity: 1;
    }
</style>
