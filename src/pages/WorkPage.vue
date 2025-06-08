<template>
  <div class="page-container">
    <title-generic title="My work experience! 👔" />
    <div class="work-body">
      <work-card
        v-for="(work, index) in works"
        :key="index"
        :company="work.company"
        :position="work.position"
        :duration="work.duration"
        :description="work.description"
        :tech="work.tech"
        :active="work.active"
      />
    </div>
  </div>
</template>

<script setup>
import works from '@/utils/work'

import TitleGeneric from '@/components/TitleGeneric.vue'
import WorkCard from '@/components/work-page/WorkCard.vue'
</script>

<style scoped>
.work-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--page-gap);
}
</style>
