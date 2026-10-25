<template>
  <ul class="contact-list">
    <li v-for="item in array" :key="item.icon_name" class="contact-item">
      <span class="detail-icon" aria-hidden="true">
        <base-icon :icon-name="item.icon_name" :size="27" color="currentColor" />
      </span>
      <div class="detail-copy">
        <span class="detail-label">{{ item.icon_name === 'contact' ? 'Email' : 'Location' }}</span>
        <a v-if="item.icon_name === 'contact'" :href="`mailto:${item.text}`">{{ item.text }}</a>
        <span v-else>{{ item.text }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'

defineProps({
  array: { type: Array, required: true }
})
</script>

<style scoped>
.contact-list {
  display: grid;
  gap: 19px;
  min-width: 0;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 0;
}
.detail-icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(202, 174, 255, 0.4);
  border-radius: 11px;
  background: rgba(157, 111, 220, 0.15);
  color: #f1e8ff;
}
.detail-copy {
  display: grid;
  gap: 2px;
  min-width: 0;
  color: #fff;
  font-size: var(--type-secondary);
  line-height: var(--leading-compact);
  overflow-wrap: anywhere;
}
.detail-label {
  color: #ded0fa;
  font-size: var(--type-small);
}
.detail-copy a {
  color: #fff;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
}
.detail-copy a:hover {
  text-decoration-color: currentColor;
}
.detail-copy a:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}
</style>
