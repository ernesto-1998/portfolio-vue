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
  border: 5px solid var(--backtitle-color);
  height: 250px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.profile-title > h2 {
  font-size: var(--type-subtitle);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-heading);
}

@media (max-width: 1024px) {
  img {
    border: 5px solid var(--layout-color);
    max-width: 350px;
    height: 350px;
  }

  .profile-title {
    max-width: 350px;
    border-top: 5px solid var(--layout-color);
    background-color: var(--element-color);
  }

  .profile-title > h2 {
    font-size: clamp(22px, 5vw, 30px);
  }
}
</style>
