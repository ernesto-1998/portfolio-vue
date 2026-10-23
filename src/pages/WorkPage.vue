<template>
  <div class="page-container">
    <h1 class="work-title">Work Experience</h1>
    <div class="work-body">
      <work-card
        v-for="work in works"
        :key="work.company"
        :company="work.company"
        :position="work.position"
        :duration="work.duration"
        :responsibilities="work.responsibilities"
        :tech="work.tech"
        :promoted-after-six-months="work.promotedAfterSixMonths"
      />
    </div>
  </div>
</template>

<script setup>
import works from '@/utils/work'

import WorkCard from '@/components/work-page/WorkCard.vue'
</script>

<style scoped>
.work-title {
  color: var(--layout-color);
  font-family: var(--title-font);
  font-size: clamp(32px, 4vw, 42px);
  font-weight: 700;
  line-height: 1.2;
}

.work-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
