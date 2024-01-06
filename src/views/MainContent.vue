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
import NavMenu from '@/components/main-content/NavMenu.vue';
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
  background-color: var(--page-color);
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
</style>
