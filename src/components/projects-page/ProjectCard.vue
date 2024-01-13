<template>
  <a :href="props.url" target="_blank" class="card-container">
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
  }
})

const textTech = computed(() => props.tech.join(', '))
</script>

<style scoped>
.card-container {
    transition: 0.3s ease-in-out;
    font-family: var(--text-font);
    background-color: var(--element-color);
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
