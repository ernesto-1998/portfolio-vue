<template>
  <aside>
    <image-title :img-url="props.imgUrl" :profile-title="props.profileTitle" />
    <social-networks />
    <education-info />
  </aside>
</template>

<script setup>
import { reactive } from 'vue'

import ImageTitle from '@/components/drawer-profile/ImageTitle.vue';
import SocialNetworks from '../drawer-profile/SocialNetworks.vue';
import EducationInfo from '../drawer-profile/EducationInfo.vue';

const props = reactive({
  imgUrl: '/profile/neto_profile.jpeg',
  profileTitle: 'Ernesto Magaña'
})
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
  height: 100%;
  /* background-color: var(--page-color); */
  border-radius: var(--border-radius-page);
}
</style>
