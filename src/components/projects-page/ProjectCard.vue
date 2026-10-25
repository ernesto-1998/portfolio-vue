<template>
  <article class="card-container">
    <div class="image-frame">
      <img :src="card.image" :alt="`Screenshot of ${card.title}`" loading="lazy" />
      <span
        class="app-type_tag"
        :class="{ 'tag-fullstack': card.type === 'FULLSTACK' }"
        :style="{ '--tag-color': tagColor }"
        >{{ card.type }}</span
      >
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ card.title }}</h2>
      <p class="description">{{ card.summary || card.description }}</p>
      <ul class="tech-list" aria-label="Main technologies">
        <li
          v-for="(tech, index) in card.tech.slice(0, 2)"
          :key="`${tech.text}-${index}`"
          class="tech-pill"
        >
          <base-icon :icon-name="tech.name" :size="17" aria-hidden="true" />
          <span>{{ tech.text }}</span>
        </li>
        <li v-if="card.tech.length > 2" class="tech-pill third-tech">
          <base-icon :icon-name="card.tech[2].name" :size="17" aria-hidden="true" />
          <span>{{ card.tech[2].text }}</span>
        </li>
        <li
          v-if="card.tech.length > 3"
          class="tech-pill more-tech more-tech-wide"
          :aria-label="`${card.tech.length - 3} additional technologies`"
        >
          +{{ card.tech.length - 3 }}
        </li>
        <li
          v-if="card.tech.length > 2"
          class="tech-pill more-tech more-tech-narrow"
          :aria-label="`${card.tech.length - 2} additional technologies`"
        >
          +{{ card.tech.length - 2 }}
        </li>
      </ul>
      <button class="view-button" type="button" @click="modal.openModal($event.currentTarget)">
        <span>View project</span>
        <base-icon icon-name="arrowRight" :size="21" aria-hidden="true" />
      </button>
    </div>
  </article>
  <modal-project ref="modal" :title-id="titleId">
    <modal-project-page :project="card" :tag-color="tagColor" :title-id="titleId" />
  </modal-project>
</template>

<script setup>
import { computed, ref } from 'vue'
import PROJECT_TYPE from '@/enums/project-type.js'
import BaseIcon from '@/components/icons/BaseIcon.vue'
import ModalProject from './ModalProject.vue'
import ModalProjectPage from '@/pages/ModalProjectPage.vue'

const modal = ref(null)
const props = defineProps({ card: { type: Object, required: true } })
const titleId = computed(
  () => `project-title-${props.card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
)
const tagColor = computed(
  () =>
    ({
      [PROJECT_TYPE.FULLSTACK]: 'var(--fullstack-tag-color)',
      [PROJECT_TYPE.BACKEND]: 'var(--backend-tag-color)',
      [PROJECT_TYPE.FRONTEND]: 'var(--frontend-tag-color)',
      [PROJECT_TYPE.PLATFORM]: 'var(--platform-tag-color)'
    })[props.card.type] || 'var(--fullstack-tag-color)'
)
</script>

<style scoped>
.card-container {
  container-type: inline-size;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--text-color);
  background: #21134f;
  border: 1px solid rgba(192, 164, 255, 0.58);
  border-radius: var(--border-radius-page);
  box-shadow: 0 10px 24px rgba(12, 5, 44, 0.14);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}
.card-container:hover,
.card-container:focus-within {
  border-color: #d4bbff;
  box-shadow: 0 13px 28px rgba(12, 5, 44, 0.26);
}
.card-container:hover {
  transform: translateY(-3px);
}
.image-frame {
  position: relative;
  height: 190px;
  background: #130d35;
}
.image-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.app-type_tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 13px;
  border-radius: 999px;
  background: var(--tag-color);
  color: #170e39;
  font-size: 12px;
  font-weight: var(--weight-bold);
  line-height: 1.4;
  letter-spacing: 0.04em;
}
.tag-fullstack {
  color: white;
}
.card-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}
.card-title {
  font-size: clamp(20px, 1.7vw, 24px);
  line-height: 1.2;
  overflow-wrap: break-word;
}
.description {
  color: #e6ddff;
  font-size: 16px;
  font-weight: var(--weight-regular);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}
.tech-list {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
}
.tech-pill {
  display: inline-flex;
  align-items: center;
  flex: 0 1 auto;
  gap: 4px;
  min-width: 0;
  min-height: 30px;
  padding: 4px 6px;
  border: 1px solid rgba(189, 160, 255, 0.34);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.04);
  font-size: 13px;
  line-height: 1.2;
}
.tech-pill span {
  overflow-wrap: anywhere;
}
.tech-pill :deep(svg) {
  flex: none;
}
.more-tech {
  flex: none;
  color: #e4cfff;
  font-weight: var(--weight-semibold);
}
.more-tech-narrow {
  display: none;
}
.view-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  margin-top: auto;
  padding: 9px 15px;
  border: 0;
  border-radius: 10px;
  background: #dac7ff;
  color: #1a1044;
  font-size: var(--type-secondary);
  font-weight: var(--weight-bold);
  cursor: pointer;
  transition:
    background 180ms ease,
    transform 180ms ease;
}
.view-button:hover {
  background: #ebdeff;
}
.view-button:active {
  transform: translateY(1px);
}
.view-button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}
@container (max-width: 340px) {
  .third-tech,
  .more-tech-wide {
    display: none;
  }
  .more-tech-narrow {
    display: inline-flex;
  }
}
@media (max-width: 600px) {
  .image-frame {
    height: 165px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .card-container,
  .view-button {
    transition: none;
  }
  .card-container:hover {
    transform: none;
  }
}
</style>
