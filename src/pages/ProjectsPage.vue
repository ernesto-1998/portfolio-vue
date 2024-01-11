<template>
  <div class="page-container">
    <title-generic title="A list of my projects! 🤖" />
    <div class="projects-body">
      <project-card
        v-for="(card, index) in projects"
        :key="index"
        :image="card.image"
        :url="card.url"
        :title="card.title"
        :description="card.description"
        :tech="card.tech"
      />
    </div>
  </div>
</template>

<script setup>
import projects from '@/utils/projects.js'

import TitleGeneric from '@/components/TitleGeneric.vue'
import ProjectCard from '@/components/projects-page/ProjectCard.vue'
</script>

<style scoped>
.projects-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--page-gap);
}
</style>
