<template>
  <div class="info-container">
    <title-generic :title="'My social networks!'" :background="false" />
    <social-networks :back-color="false" />
    <contact-card :array="contact_info" />
  </div>
</template>

<script setup>
import contact_info from '@/utils/contact_info'

import TitleGeneric from '@/components/TitleGeneric.vue'
import SocialNetworks from '@/components/drawer-profile/SocialNetworks.vue'
import ContactCard from './ContactCard.vue'
</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--page-gap);
}
</style>
