<template>
  <div class="title-container">
    <component
      :is="props.level === 1 ? 'h1' : 'h2'"
      class="title"
      :class="props.level === 1 ? 'type-page-title' : 'type-section-title'"
      :style="{ backgroundColor: defineBack }"
    >
      {{ props.title }}
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  background: {
    type: Boolean,
    default: true
  },
  level: {
    type: Number,
    default: 1
  }
})

const defineBack = computed(() => (props.background ? 'var(--element-color)' : 'transparent'))
</script>

<style scoped>
.title-container {
  text-align: center;
}
.title {
  display: inline;
  color: var(--layout-color);
  padding: 5px 15px;
  text-align: center;
  border-radius: var(--border-radius-page);
}

@media (max-width: 1024px) {
  .title {
    display: block;
  }
}
</style>
