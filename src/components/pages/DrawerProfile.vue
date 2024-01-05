<template>
  <aside>
    <image-title :img-url="props.imgUrl" :profile-title="props.profileTitle" />
  </aside>
</template>

<script setup>
import { reactive } from 'vue'
import ImageTitle from '../generics/drawer-profile/ImageTitle.vue'

const props = reactive({
  imgUrl: '/profile/neto_profile.jpeg',
  profileTitle: 'Ernesto Magaña'
})
</script>

<style scoped>
aside {
  width: 250px;
  height: 100vh;
  padding: 15px;
  background-color: var(--page-color);
  opacity: var(--opacity);
  border-radius: var(--border-radius-page);
}
</style>
