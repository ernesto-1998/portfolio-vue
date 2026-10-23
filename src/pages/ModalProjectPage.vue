<template>
  <div class="project-page_wrapper">
    <div class="project-page_row">
      <div class="image-tag_wrapper">
        <div class="app-type_tag" :style="{ backgroundColor: props.tagColor }">
          {{ props.project.type }}
        </div>
        <img class="image" :src="props.project.image" alt="" />
      </div>
      <div class="project-page_description">
        <h1 class="type-page-title">{{ props.project.title }}</h1>
        <p class="project-page_text type-body">{{ props.project.description || 'Web App' }}</p>
        <div class="project-page_tech">
          <skills-icons :title="techObject.title" :skills_icons="techObject.items" />
        </div>
        <div class="project-page_button">
          <link-button
            :style="{ backgroundColor: props.tagColor }"
            :link="props.project.url"
            :text="'Link'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkButton from '@/components/LinkButton.vue'
import SkillsIcons from '@/components/home-page/SkillsIcons.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  tagColor: {
    type: String,
    required: true
  }
})

const techObject = {
  title: 'Technologies used:',
  items: props.project.tech
}
</script>

<style scoped>
.project-page_wrapper {
  padding: 15px;
  color: var(--text-color);
}

.project-page_row {
  display: grid;
  grid-template-columns: 1fr;
}

.image-tag_wrapper {
  position: relative;
  padding: 10px;
}

.app-type_tag {
  padding: 10px 20px;
  position: absolute;
  transform: translateX(-10px) rotate(-7grad);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  font-size: var(--type-small);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-compact);
}

.project-page_description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  padding: 5px 10px;
}

.project-page_tech {
  display: flex;
  justify-content: center;
}

h1 {
  width: 100%;
  padding-top: 5px;
  text-align: center;
  overflow-wrap: anywhere;
}

.project-page_text {
  background-color: var(--element-color);
  border-radius: var(--border-radius-page);
  padding: 20px;
  text-align: center;
  overflow-wrap: anywhere;
}

.project-page_tech {
  padding: 5px;
}

.project-page_button {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .project-page_wrapper {
    max-width: 75%;
    margin: 0 auto;
  }
}
</style>
