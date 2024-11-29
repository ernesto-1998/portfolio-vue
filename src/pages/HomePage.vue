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
        <education-info :object="props.education" />
        <education-info :object="props.languages" />
        <social-networks :back-color="false" />
      </div>
      <skills-icons :title="props['skills_icons'].title" />
    </div>
  </div>
</template>

<script setup>

import TitleGeneric from '@/components/TitleGeneric.vue'
import InfoCard from '@/components/home-page/InfoCard.vue'
import SkillsIcons from '@/components/home-page/SkillsIcons.vue'
import ImageTitle from '@/components/drawer-profile/ImageTitle.vue'
import EducationInfo from '@/components/drawer-profile/EducationInfo.vue'
import SocialNetworks from '@/components/drawer-profile/SocialNetworks.vue'

const EXPERIENCE_YEARS = new Date().getFullYear() - 2021; 

const props = {
  title_generic: {
    title: 'Hi! My name is Ernesto and I am a Software Engineer! 🤖'
  },
  info_card: {
    text: `Hello, nice to meet you!🤗 I am a software engineer with ${EXPERIENCE_YEARS} years of experience specializing in web development. My passion lies in technology, and I thoroughly enjoy taking on challenges. If you have any new ventures or projects in mind, I would be delighted to be a part of them.😎`
  },
  skills_icons: {
    title: 'My Favorite Technologies!'
  },
  image_title: {
    imgUrl: '/profile/neto_profile.jpg',
    profileTitle: 'Ing. Ernesto Magaña'
  },
  education: {
    title: 'Education',
    items: ['Bachiller general - 2014', 'Graduate of Computer Systems Engineering | 2015 - 2023']
  },
  languages: {
    title: 'Languages',
    items: ['Spanish - Native', 'English - C1', 'Portuguese - A1']
  }
}
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
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  }
}
</style>
