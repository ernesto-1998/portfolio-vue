<template>
  <main :class="{ 'home-content': isHome }">
    <section>
      <nav-menu />
    </section>
    <article ref="pageScroll">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition name="slide" mode="out-in" @before-enter="resetPageScroll">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </article>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import NavMenu from '@/components/main-content/NavMenu.vue'
import { useRoute } from 'vue-router'

const pageScroll = ref(null)
const route = useRoute()
const isHome = computed(() => route.name === 'home')

const resetPageScroll = () => {
  if (pageScroll.value) pageScroll.value.scrollTop = 0
}
</script>

<style scoped>
main {
  width: 100%;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.home-content {
  height: auto;
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
  min-height: 0;
  overflow-y: auto;
  background: var(--linear-gradient);
  border-radius: var(--border-radius-page);
  padding: 20px;
  overflow-x: hidden;
}
.home-content article {
  flex: none;
  height: auto;
  overflow-x: clip;
  overflow-y: visible;
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
  article {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
