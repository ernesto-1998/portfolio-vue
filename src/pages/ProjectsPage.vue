<template>
  <div class="page-container">
    <div class="title-filter_wrapper">
      <div class="page-heading">
        <title-generic title="Projects" :background="false" />
        <p>A list of my projects! 💼</p>
      </div>
      <div class="select-filter_wrapper">
        <label for="project-filter" class="filter-title">Filter:</label>
        <select id="project-filter" v-model="filterValue" class="select-filter">
          <option value="ALL">All</option>
          <option value="FRONTEND">Frontend</option>
          <option value="BACKEND">Backend</option>
          <option value="FULLSTACK">Fullstack</option>
          <option value="PLATFORM">Platform</option>
        </select>
      </div>
    </div>
    <div class="projects-body">
      <project-card v-for="card in filteredProjects" :key="card.title" :card="card" />
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
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 20px;
}

.title-filter_wrapper {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
}
.page-heading {
  min-width: 0;
}
.page-heading :deep(.title-container) {
  text-align: left;
}
.page-heading :deep(.title) {
  padding: 0;
  color: #d9c2ff;
}
.page-heading p {
  color: #e8ddff;
  font-size: var(--type-subtitle);
  line-height: 1.3;
}

.select-filter_wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
}

.filter-title {
  color: var(--layout-color);
  font-size: var(--type-secondary);
  font-weight: var(--weight-medium);
}

.select-filter {
  min-width: 150px;
  border-radius: var(--border-radius-title);
  border: 1px solid #8e6bbb;
  font-size: var(--type-secondary);
  font-weight: var(--weight-medium);
  background-color: var(--element-color);
  color: var(--layout-color);
  min-height: 44px;
  padding: 8px 12px;
}
.select-filter:focus-visible {
  outline: 3px solid #d8bdff;
  outline-offset: 3px;
}

@media (max-width: 768px) {
  .title-filter_wrapper {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .select-filter_wrapper {
    margin-left: 0;
  }
}
</style>
