<template>
  <section class="profile-section">
    <h2 class="type-subtitle">
      <base-icon :icon-name="object.icon" :size="22" color="currentColor" aria-hidden="true" />
      <span>{{ object.title }}</span>
    </h2>
    <ul>
      <li v-for="item in object.items" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'

defineProps({ object: { type: Object, required: true } })
</script>

<style scoped>
.profile-section {
  min-width: 0;
  padding-top: 18px;
  border-top: 1px solid rgba(196, 165, 245, 0.36);
  color: var(--text-color);
}
h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 19px;
}
h2 :deep(svg) {
  flex: none;
  color: #d7c0ff;
}
ul {
  display: grid;
  gap: 9px;
  margin-top: 12px;
  padding-left: 32px;
  list-style: none;
}
li {
  color: #e6def4;
  font-size: 15px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}
</style>
