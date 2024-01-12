<template>
  <aside>
    <image-title :img-url="props.imgUrl" :profile-title="props.profileTitle" />
    <social-networks />
    <education-info :object="props.education"/>
  </aside>
</template>

<script setup>
import { reactive } from 'vue'

import ImageTitle from '@/components/drawer-profile/ImageTitle.vue'
import SocialNetworks from '@/components/drawer-profile/SocialNetworks.vue'
import EducationInfo from '@/components/drawer-profile/EducationInfo.vue'

const props = reactive({
  imgUrl: '/profile/neto_profile.jpg',
  profileTitle: 'Ing. Ernesto Magaña',
  education: {
    title: 'Education',
    items: ['Bachiller general - 2014', 'Graduate of Computer Systems Engineering | 2015 - 2023', 'Spanish - Native', 'English - C1', 'Portuguese - A1'],
  },
})
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
  height: 100%;
  border-radius: var(--border-radius-page);
}

@media (max-width: 1024px) {
  aside {
    display: none;
  }
}
</style>
