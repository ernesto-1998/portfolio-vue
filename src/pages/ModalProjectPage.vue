<template>
  <div class="project-detail">
    <div class="detail-intro">
      <span
        class="category-tag"
        :class="{ 'tag-fullstack': project.type === 'FULLSTACK' }"
        :style="{ '--tag-color': tagColor }"
        >{{ project.type }}</span
      >
      <h2 :id="titleId" class="detail-title">{{ project.title }}</h2>
      <p class="detail-description">{{ project.description }}</p>
    </div>

    <div class="media-panel">
      <div class="image-frame">
        <img :src="images[imageIndex]" :alt="`Screenshot ${imageIndex + 1} of ${project.title}`" />
      </div>
      <div v-if="images.length > 1" class="gallery-controls" aria-label="Project screenshots">
        <button
          type="button"
          class="gallery-button previous"
          :aria-label="`Previous screenshot of ${project.title}`"
          @click="previousImage"
        >
          <base-icon icon-name="arrowRight" :size="20" color="currentColor" aria-hidden="true" />
        </button>
        <span aria-live="polite">{{ imageIndex + 1 }} / {{ images.length }}</span>
        <button
          type="button"
          class="gallery-button"
          :aria-label="`Next screenshot of ${project.title}`"
          @click="nextImage"
        >
          <base-icon icon-name="arrowRight" :size="20" color="currentColor" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="detail-sections">
      <section
        v-if="project.features?.length"
        class="features-section"
        :aria-labelledby="`${titleId}-features`"
      >
        <h3 :id="`${titleId}-features`">Key features</h3>
        <ul class="features-list">
          <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
        </ul>
      </section>
      <section class="technologies-section" :aria-labelledby="`${titleId}-technologies`">
        <h3 :id="`${titleId}-technologies`">Technologies used</h3>
        <ul class="tech-list">
          <li
            v-for="(tech, index) in project.tech"
            :key="`${tech.text}-${index}`"
            class="tech-pill"
          >
            <base-icon :icon-name="tech.name" :size="21" aria-hidden="true" />
            <span>{{ tech.text }}</span>
          </li>
        </ul>
      </section>
    </div>

    <div v-if="project.links?.length" class="project-links">
      <a
        v-for="link in project.links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
        :class="{ 'npm-link': link.icon === 'npm' }"
      >
        <base-icon
          v-if="link.icon && link.icon !== 'external'"
          :icon-name="link.icon"
          :size="link.icon === 'npm' ? 36 : 22"
          color="currentColor"
          aria-hidden="true"
        />
        <span>{{ link.label }}</span>
        <base-icon icon-name="external" :size="18" color="currentColor" aria-hidden="true" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import BaseIcon from '@/components/icons/BaseIcon.vue'

const props = defineProps({
  project: { type: Object, required: true },
  tagColor: { type: String, required: true },
  titleId: { type: String, required: true }
})

const images = computed(() =>
  props.project.images?.length ? props.project.images : [props.project.image]
)
const imageIndex = ref(0)
function previousImage() {
  imageIndex.value = (imageIndex.value - 1 + images.value.length) % images.value.length
}
function nextImage() {
  imageIndex.value = (imageIndex.value + 1) % images.value.length
}
</script>

<style scoped>
.project-detail {
  display: grid;
  grid-template-columns: minmax(0, 0.93fr) minmax(0, 1.07fr);
  grid-template-areas:
    'media intro'
    'media sections'
    'media links';
  gap: 24px 28px;
  align-items: start;
  padding: 34px 30px 30px;
}
.detail-intro {
  grid-area: intro;
  min-width: 0;
  padding-right: 38px;
}
.category-tag {
  display: inline-block;
  padding: 5px 15px;
  border-radius: 999px;
  background: var(--tag-color);
  color: #170e39;
  font-size: 12px;
  font-weight: var(--weight-bold);
  letter-spacing: 0.04em;
}
.tag-fullstack {
  color: white;
}
.detail-title {
  margin-top: 16px;
  font-size: clamp(27px, 3vw, 38px);
  line-height: 1.16;
  overflow-wrap: break-word;
}
.detail-description {
  margin-top: 14px;
  color: #e8deff;
  font-size: var(--type-body);
  line-height: 1.5;
  overflow-wrap: anywhere;
}
.media-panel {
  grid-area: media;
  min-width: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 14px;
  border: 1px solid rgba(178, 138, 255, 0.42);
  border-radius: 16px;
  background: #140c38;
}
.image-frame {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 250px;
}
.image-frame img {
  display: block;
  width: 100%;
  height: auto;
  max-height: min(62dvh, 610px);
  object-fit: contain;
  border-radius: 8px;
}
.gallery-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.gallery-button {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid #9e7acb;
  border-radius: 50%;
  background: transparent;
  color: white;
  cursor: pointer;
}
.gallery-button.previous :deep(svg) {
  transform: rotate(180deg);
}
.gallery-button:hover {
  background: #4b307a;
}
.gallery-button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 2px;
}
.detail-sections {
  grid-area: sections;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 22px;
  min-width: 0;
}
.detail-sections section {
  min-width: 0;
}
.detail-sections h3 {
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(209, 182, 255, 0.72);
  font-size: 20px;
  line-height: 1.25;
}
.features-list {
  display: grid;
  gap: 11px;
  margin-top: 14px;
  padding-left: 21px;
  list-style: disc;
  color: #eee8ff;
  font-size: 15px;
  line-height: 1.45;
}
.features-list li {
  padding-left: 2px;
  overflow-wrap: anywhere;
}
.features-list li::marker {
  color: #cba8ff;
}
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 14px;
}
.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  max-width: 100%;
  min-height: 38px;
  padding: 6px 9px;
  border: 1px solid rgba(178, 138, 255, 0.45);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.04);
  font-size: 13px;
  line-height: 1.2;
}
.tech-pill span {
  overflow-wrap: anywhere;
}
.project-links {
  grid-area: links;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1 1 190px;
  min-height: 48px;
  padding: 8px 14px;
  border: 1px solid #c6a8ff;
  border-radius: 10px;
  color: white;
  font-size: var(--type-secondary);
  font-weight: var(--weight-semibold);
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
  transition:
    background 180ms ease,
    border-color 180ms ease;
}
.project-link:hover {
  background: #43276f;
}
.project-link:focus-visible {
  outline: 3px solid white;
  outline-offset: 3px;
}
.npm-link {
  border-color: #e0686a;
  background: rgba(203, 56, 55, 0.16);
}
.npm-link:hover {
  background: rgba(203, 56, 55, 0.3);
}
@media (max-width: 1100px) {
  .detail-sections {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 760px) {
  .project-detail {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'intro' 'media' 'sections' 'links';
    gap: 22px;
    padding: 24px 18px 22px;
  }
  .detail-intro {
    padding-right: 46px;
  }
  .detail-title {
    margin-top: 10px;
  }
  .media-panel {
    padding: 9px;
  }
  .image-frame {
    min-height: 0;
  }
  .image-frame img {
    max-height: 45dvh;
  }
}
@media (prefers-reduced-motion: reduce) {
  .project-link {
    transition: none;
  }
}
</style>
