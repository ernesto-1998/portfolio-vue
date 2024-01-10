<template>
  <div class="page-container">
    <image-title
      :img-url="props['image_title'].imgUrl"
      :profile-title="props['image_title'].profileTitle"
      class="display"
    />
    <title-generic :title="props['title_generic'].title" />
    <div class="home-body">
      <info-card :text="props['info_card'].text" />
      <div class="education-social_wrapper display">
        <education-info />
        <social-networks />
      </div>
      <skills-icons :title="props['skills_icons'].title" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import TitleGeneric from '@/components/TitleGeneric.vue'
import InfoCard from '@/components/home-page/InfoCard.vue'
import SkillsIcons from '@/components/home-page/SkillsIcons.vue'
import ImageTitle from '@/components/drawer-profile/ImageTitle.vue'
import EducationInfo from '@/components/drawer-profile/EducationInfo.vue'
import SocialNetworks from '@/components/drawer-profile/SocialNetworks.vue'

const props = reactive({
  title_generic: {
    title: 'Hi! My name is Ernesto and I am a Web Developer! 🤖'
  },
  info_card: {
    text: 'Hello, nice to meet you!🤗 I am a software engineer with three years of experience specializing in web development. My passion lies in technology, and I thoroughly enjoy taking on challenges. If you have any new ventures or projects in mind, I would be delighted to be a part of them.😎'
  },
  skills_icons: {
    title: 'My Favorite Technologies!'
  },
  image_title: {
    imgUrl: '/profile/neto_profile.jpeg',
    profileTitle: 'Ing. Ernesto Magaña'
  }
})
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: var(--page-gap);
}
.home-body {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 25px;
}

.education-social_wrapper {
  display: grid;
  row-gap: 20px;
}

@media (min-width: 1025px) {
  .display {
    display: none;
  }
}

@media (max-width: 1024px) {
  .home-body {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .education-social_wrapper {
    /* display: grid; */
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
}

/* Code for bottom navigation menu on mobile devices (not supported for dvh units) */

/* @media (max-width: 768px) {
  .home-container {
    padding-bottom: 100px;
  }
} */
</style>
