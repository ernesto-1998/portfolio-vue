<template>
  <article class="work-card">
    <header class="card-header">
      <div class="job-heading">
        <h2 class="type-card-title">{{ company }}</h2>
        <h3 class="type-subtitle">{{ position }}</h3>
      </div>
      <div class="job-meta">
        <p class="duration type-secondary">{{ duration }}</p>
        <span v-if="promotedAfterSixMonths" class="promotion type-ui">Promoted after 6 months</span>
      </div>
    </header>

    <ul class="responsibilities type-body">
      <li v-for="responsibility in responsibilities" :key="responsibility">
        {{ responsibility }}
      </li>
    </ul>

    <ul class="tech-list" aria-label="Technologies used">
      <li v-for="technology in tech" :key="technology" class="tech-tag">{{ technology }}</li>
    </ul>
  </article>
</template>

<script setup>
defineProps({
  company: { type: String, required: true },
  position: { type: String, required: true },
  duration: { type: String, required: true },
  responsibilities: { type: Array, required: true },
  tech: { type: Array, required: true },
  promotedAfterSixMonths: { type: Boolean, default: false }
})
</script>

<style scoped>
.work-card {
  min-width: 0;
  padding: 28px 30px;
  border: 1px solid #7954a5;
  border-radius: var(--border-radius-page);
  background-color: var(--backtitle-v2-color);
  color: var(--layout-color);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.job-heading {
  min-width: 0;
}

.job-heading h3 {
  margin-top: 2px;
  color: #d9b8ff;
}

.job-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  flex: none;
  min-width: 0;
  max-width: 100%;
}

.duration {
  color: #d9b8ff;
  text-align: right;
  overflow-wrap: anywhere;
}

.promotion {
  padding: 7px 12px;
  border: 1px solid #7954a5;
  border-radius: 10px;
  background-color: var(--cristal-main-color);
  color: #e9d7ff;
  font-size: var(--type-small);
  max-width: 100%;
  overflow-wrap: anywhere;
}

.responsibilities {
  margin-top: 20px;
  padding-left: 24px;
  list-style: disc;
}

.responsibilities li {
  padding-left: 4px;
  overflow-wrap: anywhere;
}

.responsibilities li + li {
  margin-top: 6px;
}

.responsibilities li::marker {
  color: #c79cff;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.tech-tag {
  padding: 5px 12px;
  border: 1px solid #7954a5;
  border-radius: 10px;
  background-color: var(--cristal-main-color);
  font-size: var(--type-small);
  font-weight: var(--weight-medium);
  line-height: var(--leading-compact);
  max-width: 100%;
  overflow-wrap: anywhere;
}

@media (max-width: 640px) {
  .work-card {
    padding: 22px 20px;
  }

  .card-header {
    flex-direction: column;
    gap: 12px;
  }

  .job-meta {
    align-items: flex-start;
    gap: 8px;
  }

  .duration {
    text-align: left;
  }
}
</style>
