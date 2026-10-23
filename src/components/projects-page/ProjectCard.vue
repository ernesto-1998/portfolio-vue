<template>
  <modal-project ref="modal">
    <template #content>
      <modal-project-page :project="props.card" :tag-color="defineBack" />
    </template>
  </modal-project>
  <a @click="modal.openModal" target="_blank" class="card-container">
    <div class="app-type_tag" :style="{ backgroundColor: defineBack }">
      {{ props.card.type }}
    </div>
    <img :src="props.card.image" alt="Web app project" />
    <div class="text-wrapper">
      <h2 class="type-card-title">{{ props.card.title }}</h2>
      <p class="description type-body">{{ props.card.description || 'Web App' }}</p>
    </div>
  </a>
</template>

<script setup>
import { computed, ref } from 'vue'

import PROJECT_TYPE from '@/enums/project-type.js'
import ModalProject from './ModalProject.vue'
import ModalProjectPage from '@/pages/ModalProjectPage.vue'

const modal = ref(null)

const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})

const defineBack = computed(() =>
  props.card.type === PROJECT_TYPE.FULLSTACK
    ? 'var(--fullstack-tag-color)'
    : props.card.type === PROJECT_TYPE.BACKEND
      ? 'var(--backend-tag-color)'
      : props.card.type === PROJECT_TYPE.FRONTEND
        ? 'var(--frontend-tag-color)'
        : props.card.type === PROJECT_TYPE.PLATFORM
          ? 'var(--platform-tag-color)'
          : 'var(--fullstack-tag-color)'
)
</script>

<style scoped>
.card-container {
  position: relative;
  transition: 0.3s ease-in-out;
  background-color: var(--element-color);
}

.card-container:hover {
  cursor: pointer;
}

.app-type_tag {
  padding: 10px 20px;
  position: absolute;
  transform: translateX(-10px) rotate(-7grad);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  font-size: var(--type-small);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-compact);
}

img {
  min-height: 200px;
}

h2 {
  width: 100%;
  padding-top: 5px;
  text-align: center;
  overflow-wrap: anywhere;
}

h2::before {
  content: '🧑‍💻';
  margin-right: 10px;
}

.description {
  padding: 5px 10px;
  margin-top: 10px;
  text-align: center;
  overflow-wrap: anywhere;
}

.card-container:hover {
  transform: translateY(-7px);
}

.card-container:hover .tech-list {
  right: -50%;
}

@media (max-width: 768px) {
  .display {
    display: none;
  }
}
</style>
