<template>
  <div class="card-wrapper" :class="['card-back-color', { active }]">
    <h1>{{ duration }}</h1>
    <h3>{{ company }} - {{ position }}</h3>
    <p class="card-description">{{ description }}</p>
    <p class="card-tech">
      {{ tech }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>

<style scoped>

.card-back-color {
  background-color: var(--element-color);
}

.card-back-color.active {
  background-color: var(--cristal-box-shadow-color);
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0;
  font-family: var(--title-font);
  color: var(--layout-color);
  background-color: var(--element-color);
  clip-path: polygon(14% 0, 86% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%);
}

h1 {
  font-size: medium;
}

h3 {
  font-size: 17px;
  font-weight: 700;
}

.card-description {
  background-color: var(--backtitle-color);
  border-radius: var(--border-radius-page);
  margin: 10px 25px;
  padding: 10px;
  font-size: 15px;
  height: 150px;
  overflow-y: auto;
  font-family: var(--text-font);
  line-height: 25px;
}

.card-tech {
  padding: 10px;
  font-weight: 700;
  background: var(--cristal-main-color);
  box-shadow: 0 8px 32px 0 var(--cristal-box-shadow-color);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border: 1px solid var(--cristal-border-color);
}
</style>
