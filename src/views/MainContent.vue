<template>
  <main>
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
  background: var(--linear-gradient);
  border-radius: var(--border-radius-page);
  padding: 20px;
  overflow-x: hidden;
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
</style>
