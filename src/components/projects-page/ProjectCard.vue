<template>
  <a :href="props.url" target="_blank" class="card-container">
    <img :src="props.image" alt="Web app project" />
    <h1>{{ props.title }}</h1>
    <p class="description">{{ props.description || 'Web App' }}</p>
    <ul class="tech-list display">
        <li v-for="item in props.tech" :key="item.lenght" class="tech-item">{{ item }}, </li>
    </ul>
  </a>
</template>

<script setup>
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
</script>

<style scoped>
.card-container {
    transition: 0.3s ease-in-out;
}

h1 {
  width: 100%;
  padding: 5px 0;
  background-color: var(--element-color);
  text-align: center;
  font-family: var(--title-font);
  font-weight: 700;
}

.description {
  padding: 10px 5px;
  font-family: var(--text-font);
  background-color: var(--page-color);
  text-align: center;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 15px;
    background-color: var(--element-color);
}

.card-container:hover {
    transform: translateY(-7px);
}

@media (max-width: 768px) {
    .display {
        display: none;
    }
}
</style>
