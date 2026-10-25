<template>
  <section class="info-container" aria-labelledby="details-heading">
    <div class="card-heading">
      <span class="heading-icon" aria-hidden="true">
        <base-icon icon-name="location" :size="29" color="currentColor" />
      </span>
      <div>
        <h2 id="details-heading" class="type-section-title">Contact details</h2>
        <p>Prefer to reach out directly?</p>
      </div>
    </div>

    <contact-card :array="contactRows" />

    <div class="online-section">
      <h3>Find me online</h3>
      <ul class="social-links" aria-label="Social profiles">
        <li v-for="profile in social" :key="profile.name">
          <a
            :href="profile.link"
            :aria-label="`Visit my ${profile.name} profile (opens in a new tab)`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <base-icon
              :icon-name="profile.name"
              :size="27"
              color="currentColor"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'
import contactInfo from '@/utils/contact_info.js'
import social from '@/utils/social.js'
import ContactCard from './ContactCard.vue'

const contactRows = ['contact', 'location']
  .map((iconName) => contactInfo.find((item) => item.icon_name === iconName))
  .filter(Boolean)
</script>

<style scoped>
.info-container {
  min-width: 0;
  padding: clamp(18px, 2vw, 26px);
  border: 1px solid rgba(192, 164, 255, 0.42);
  border-radius: var(--border-radius-page);
  background: linear-gradient(145deg, rgba(84, 57, 116, 0.48), rgba(48, 30, 86, 0.72));
}
.card-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 28px;
}
.card-heading h2 {
  font-size: clamp(21px, 2vw, 25px);
}
.card-heading p {
  margin-top: 3px;
  color: #e5d8ff;
  font-size: var(--type-secondary);
  font-weight: var(--weight-regular);
  line-height: var(--leading-compact);
}
.heading-icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(201, 169, 255, 0.3);
  border-radius: 12px;
  background: rgba(157, 111, 220, 0.27);
  color: #f2e9ff;
}
.online-section {
  margin-top: 26px;
  padding-top: 24px;
  border-top: 1px solid rgba(202, 174, 255, 0.32);
}
.online-section h3 {
  font-size: 21px;
}
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}
.social-links a {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(202, 174, 255, 0.5);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.035);
  color: #fff;
  transition:
    background 180ms ease,
    border-color 180ms ease;
}
.social-links a:hover {
  border-color: #e0c9ff;
  background: #4b337a;
}
.social-links a:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}
@media (prefers-reduced-motion: reduce) {
  .social-links a {
    transition: none;
  }
}
</style>
