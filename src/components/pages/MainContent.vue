<template>
  <main>
    <section></section>
    <article>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </article>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

section {
  height: 100px;
}

article {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--page-color);
  border-radius: var(--border-radius-page);
}
</style>
