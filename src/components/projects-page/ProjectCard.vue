<template>
  <a :href="props.url" target="_blank" class="card-container">
    <div class="app-type_tag" :style="{backgroundColor: defineBack}">
      {{ props.type }}
    </div>
    <img :src="props.image" alt="Web app project" />
    <div class="text-wrapper">
        <h1>{{ props.title }}</h1>
        <p class="description">{{ props.description || 'Web App' }}</p>
    </div>
    <div class="tech-list">
      {{ textTech }}
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue';

import PROJECT_TYPE from '@/enums/project-type.js';

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  tech: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
})

const textTech = computed(() => props.tech.join(', '))

const defineBack = computed(() => (props.type === PROJECT_TYPE.FULLSTACK ? 'var(--fullstack-tag-color)': props.type === PROJECT_TYPE.BACKEND ? 'var(--backend-tag-color)': props.type === PROJECT_TYPE.FRONTEND ? 'var(--frontend-tag-color)': 'var(--fullstack-tag-color)'))
</script>

<style scoped>
.card-container {
  position: relative;
    transition: 0.3s ease-in-out;
    font-family: var(--text-font);
    background-color: var(--element-color);
}

.app-type_tag {
  padding: 10px 20px;
  position: absolute;
  transform: translateX(-10px) rotate(-7grad);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);

}

img {
  min-height: 200px;
}

h1 {
  width: 100%;
  padding-top: 5px;
  text-align: center;
  font-family: var(--title-font);
  font-weight: 700;
}

h1::before {
  content: '🧑‍💻';
  margin-right: 10px;
}

.description {
  padding: 5px 10px;
  font-family: var(--text-font);
  text-align: center;
  overflow: hidden;
  text-overflow: clip;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; 
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 80px;
    overflow-y: auto;
    padding: 10px;
    background-color: var(--page-color);
    font-family: var(--title-font);
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
