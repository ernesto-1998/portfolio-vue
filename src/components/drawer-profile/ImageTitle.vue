<template>
  <div class="image-title">
    <img :src="imgUrl" :alt="`Portrait of ${profileTitle}`" />
    <h2>{{ profileTitle }}</h2>
  </div>
</template>

<script setup>
defineProps({
  imgUrl: { type: String, required: true },
  profileTitle: { type: String, default: 'Ernesto Magaña' }
})
</script>

<style scoped>
.image-title {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}
img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  object-position: center 28%;
  border-radius: 12px;
}
h2 {
  color: var(--text-color);
  font-size: 20px;
  font-weight: var(--weight-semibold);
  line-height: 1.25;
  overflow-wrap: break-word;
}
</style>
