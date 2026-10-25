<template>
  <main :class="{ 'home-content': isHome }">
    <section>
      <nav-menu />
    </section>
    <article>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition name="slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </article>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import NavMenu from '@/components/main-content/NavMenu.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.name === 'home')
</script>

<style scoped>
main {
  width: 100%;
  min-width: 0;
  min-height: calc(100dvh - 36px);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.home-content {
  overflow-x: clip;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

article {
  width: 100%;
  flex: 1;
  background: var(--linear-gradient);
  border-radius: var(--border-radius-page);
  padding: 20px;
  overflow-x: clip;
}
.home-content article {
  flex: none;
  background: transparent;
  border-radius: 0;
  padding: 0;
}

/* Transition */

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-enter-to {
  position: relative;
  right: 0;
}

.slide-enter-from {
  position: relative;
  right: -100%;
}

.slide-leave-to {
  position: relative;
  left: -100%;
}

.slide-leave-from {
  position: relative;
  left: 0;
}
@media (prefers-reduced-motion: reduce) {
  .slide-enter-active,
  .slide-leave-active {
    transition: none;
  }
}

@media (max-width: 1024px) {
  main {
    min-height: calc(100dvh - 32px);
  }

  article {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
