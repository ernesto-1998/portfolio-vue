<template>
  <div class="home-container">
    <title-generic title="A list of my projects! 🤖" />
    <div class="projects-body">
      <!-- <div  class="project-wrapper"> -->
        <project-card v-for="card in projects" :key="card.title" :image="card.image" :url="card.url" :title="card.title" :description="card.description" :tech="card.tech"/>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>

import projects from '@/utils/projects.js'

import TitleGeneric from '@/components/TitleGeneric.vue'
import ProjectCard from '@/components/projects-page/ProjectCard.vue';
</script>

<style scoped>

.home-container {
  display: flex;
  flex-direction: column;
  gap: var(--page-gap);
}
.projects-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--page-gap);
}
</style>
