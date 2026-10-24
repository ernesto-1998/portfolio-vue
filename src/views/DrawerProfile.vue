<template>
  <aside class="profile-sidebar" aria-label="Profile">
    <image-title :img-url="profile.imgUrl" :profile-title="profile.profileTitle" />
    <cv-link />
    <social-networks />
    <education-info :object="profile.education" />
    <education-info :object="profile.languages" />
  </aside>
</template>

<script setup>
import ImageTitle from '@/components/drawer-profile/ImageTitle.vue'
import CvLink from '@/components/drawer-profile/CvLink.vue'
import SocialNetworks from '@/components/drawer-profile/SocialNetworks.vue'
import EducationInfo from '@/components/drawer-profile/EducationInfo.vue'
import profile from '@/utils/profile.js'
</script>

<style scoped>
.profile-sidebar {
  display: flex;
  flex: 0 0 260px;
  flex-direction: column;
  gap: 16px;
  width: 260px;
  min-height: calc(100dvh - 36px);
  padding: 16px;
  border: 1px solid rgba(181, 142, 245, 0.48);
  border-radius: var(--border-radius-page);
  background: linear-gradient(160deg, #211449, #1b103f);
}
@media (max-width: 1024px) {
  .profile-sidebar {
    display: none;
  }
}
</style>
