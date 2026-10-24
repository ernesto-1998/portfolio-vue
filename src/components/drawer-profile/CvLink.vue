<template>
  <a
    class="cv-link"
    :href="CV_URL"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View CV (opens in a new tab)"
  >
    <base-icon icon-name="document" :size="25" color="currentColor" aria-hidden="true" />
    <span>View CV</span>
    <base-icon icon-name="external" :size="19" color="currentColor" aria-hidden="true" />
  </a>
</template>

<script setup>
import { CV_URL } from '@/utils/cv.js'
import BaseIcon from '@/components/icons/BaseIcon.vue'
</script>

<style scoped>
.cv-link {
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: var(--border-radius-page);
  background-color: #e3d4ff;
  color: var(--backtitle-color);
  font-size: var(--type-subtitle);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-heading);
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.cv-link:hover {
  background-color: #f1e9ff;
  transform: translateY(-2px);
}

.cv-link:focus-visible {
  outline: 3px solid var(--layout-color);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .cv-link {
    transition: none;
  }
  .cv-link:hover {
    transform: none;
  }
}

@media (max-width: 1024px) {
  .cv-link {
    width: min(100%, 350px);
    align-self: center;
  }
}
</style>
