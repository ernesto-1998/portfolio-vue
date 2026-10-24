<template>
  <div class="social-container">
    <ul class="icons-list" aria-label="Social profiles">
      <li v-for="icon in social" :key="icon.name">
        <a
          :href="icon.link"
          :aria-label="`Visit my ${icon.name} profile (opens in a new tab)`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <base-icon :icon-name="icon.name" :size="25" color="white" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import social from '@/utils/social.js'
import BaseIcon from '@/components/icons/BaseIcon.vue'
</script>

<style scoped>
.social-container {
  width: fit-content;
  max-width: 100%;
}
.icons-list {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding: 0;
  list-style: none;
}
a {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(193, 163, 244, 0.46);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.025);
  transition:
    background 180ms ease,
    border-color 180ms ease;
}
a:hover {
  background: #43306f;
  border-color: #d5bbff;
}
a:focus-visible {
  outline: 3px solid white;
  outline-offset: 3px;
}
@media (prefers-reduced-motion: reduce) {
  a {
    transition: none;
  }
}
</style>
