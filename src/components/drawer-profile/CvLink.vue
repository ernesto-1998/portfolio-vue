<template>
  <a
    class="cv-link"
    :href="CV_URL"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View CV (opens in a new tab)"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7 2.75h7l4 4V21.25H7a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2Z" />
      <path d="M14 2.75v4h4M9 12h6M9 16h6" />
    </svg>
    <span>View CV</span>
    <svg
      class="external-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 16 19 5M10 5h9v9" />
    </svg>
  </a>
</template>

<script setup>
import { CV_URL } from '@/utils/cv.js'
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
  font-family: var(--title-font);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
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

svg {
  width: 26px;
  height: 26px;
  flex: none;
}

.external-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 1024px) {
  .cv-link {
    width: min(100%, 350px);
    align-self: center;
  }
}
</style>
