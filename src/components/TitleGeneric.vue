<template>
  <div class="title-container">
    <h1 class="title" :style="{backgroundColor: defineBack}">
      {{ props.title }}
    </h1>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  background: {
    type: Boolean,
    default: true,
  }
})

const defineBack = computed(() => (props.background ? 'var(--element-color)': 'transparent'))
</script>

<style scoped>
.title-container {
  text-align: center;
}
.title {
  display: inline;
  font-family: var(--text-font);
  color: var(--layout-color);
  padding: 5px 15px;
  text-align: center;
  border-radius: var(--border-radius-page);
  font-size: 27px;
}

@media (max-width: 1024px) {
  .title {
    display: block;
  }
}
</style>
