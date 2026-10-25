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

const route = useRoute()
const isHome = computed(() => route.name === 'home')
const pageScroll = ref(null)

const resetPageScroll = () => {
  if (pageScroll.value) pageScroll.value.scrollTop = 0
}
</script>

<style scoped>
main {
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 0;
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
  min-height: 0;
  background: var(--linear-gradient);
  border-radius: var(--border-radius-page);
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}
.home-content article {
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
    height: auto;
    min-height: calc(100dvh - 32px);
  }

  section {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(27, 16, 63, 0.94);
    border-radius: 13px;
  }

  article {
    min-height: auto;
    overflow-x: clip;
    overflow-y: visible;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
