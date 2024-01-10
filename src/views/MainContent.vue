<template>
  <main>
    <section>
      <nav-menu />
    </section>
    <article>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition
            name="slide"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </article>
  </main>
</template>

<script setup>
import NavMenu from '@/components/main-content/NavMenu.vue'
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

article {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--backtitle-color);
  border-radius: var(--border-radius-page);
  padding: 20px;
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

@media (max-width: 1024px) {
  article {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

/* Code for bottom navigation menu on mobile devices (not supported for dvh units) */

/* @media (max-width: 768px) {
  section {
    position: absolute;
    z-index: 1000;
    bottom: 0;
    width: 100%;
    height: fit-content;
    padding: 10px 0;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
} */
</style>
