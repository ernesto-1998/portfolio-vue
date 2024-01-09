<template>
  <main>
    <section>
      <nav-menu />
    </section>
    <article>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition name="bounce">
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
  height: 100px;
}

article {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--backtitle-color);
  border-radius: var(--border-radius-page);
  padding: 20px;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
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
}
</style>
