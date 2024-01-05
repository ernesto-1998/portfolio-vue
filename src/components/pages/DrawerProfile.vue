<template>
  <aside>
    <image-title :img-url="props.imgUrl" :profile-title="props.profileTitle" />
  </aside>
</template>

<script setup>
import { reactive } from 'vue'
import ImageTitle from '@/components/drawer-profile/ImageTitle.vue';

const props = reactive({
  imgUrl: '/profile/neto_profile.jpeg',
  profileTitle: 'Ernesto Magaña'
})
</script>

<style scoped>
aside {
  width: 250px;
  height: 100%;
  background-color: var(--page-color);
  border-radius: var(--border-radius-page);
}
</style>
