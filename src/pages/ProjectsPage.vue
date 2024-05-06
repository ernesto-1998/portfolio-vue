<template>
  <div class="page-container">
    <div class="title-filter_wrapper">
      <title-generic title="A list of my projects! 💼" />
      <div class="select-filter_wrapper">
        <label class="filter-title">Filter: </label>
        <select v-model="filterValue" class="select-filter">
          <option value="ALL">All</option>
          <option value="FRONTEND">Frontend</option>
          <option value="BACKEND">Backend</option>
          <option value="FULLSTACK">Fullstack</option>
        </select>
      </div>
    </div>
    <div class="projects-body">
      <project-card v-for="(card, index) in filteredProjects" :key="index" :card="card" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import projects from '@/utils/projects.js'

import TitleGeneric from '@/components/TitleGeneric.vue'
import ProjectCard from '@/components/projects-page/ProjectCard.vue'

let filteredProjects = ref([...projects])
let filterValue = ref('ALL')

watch(filterValue, (newValue) => {
  if (newValue === 'ALL') {
    return (filteredProjects.value = [...projects])
  }
  filteredProjects.value = projects.filter((filtered) => filtered.type === newValue)
})
</script>

<style scoped>
.projects-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--page-gap);
}

.title-filter_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.select-filter_wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
}

.filter-title {
  color: var(--layout-color);
  font-family: var(--text-font);
  font-size: 20px;
}

.select-filter {
  max-width: 250px;
  border-radius: var(--border-radius-title);
  font-size: 15px;
  background-color: var(--element-color);
  color: var(--layout-color);
  padding: 8px;
  font-family: var(--text-font);
}

@media (max-width: 768px) {
  .title-filter_wrapper {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .select-filter {
    max-width: 100px;
  }
}
</style>
