<template>
  <div class="home-page">
    <section class="hero" aria-labelledby="home-title">
      <p class="hero-intro">Hi, I’m Ernesto</p>
      <h1 id="home-title">Software Engineer</h1>
      <p class="hero-subtitle">Backend-focused. Full-stack experience.</p>
      <div class="hero-copy">
        <p>
          I build backend services and full-stack applications with TypeScript, Node.js, and
          C#/.NET. My professional experience includes diagnosing production issues, improving
          performance, and maintaining business-critical software.
        </p>
        <p>
          I also develop open-source tools, including Mapa Audit, an audit logging SDK for Node.js
          with integrations for Express, Fastify, and NestJS.
        </p>
      </div>
      <div class="hero-actions">
        <router-link :to="{ name: 'projects' }" class="hero-action primary-action">
          <span>Explore projects</span>
          <base-icon icon-name="arrowRight" :size="21" color="currentColor" aria-hidden="true" />
        </router-link>
        <router-link :to="{ name: 'contact' }" class="hero-action secondary-action">
          <base-icon icon-name="contact" :size="22" color="currentColor" aria-hidden="true" />
          <span>Get in touch</span>
        </router-link>
        <cv-link class="mobile-cv" />
      </div>
    </section>

    <section class="experience-areas" aria-labelledby="areas-heading">
      <h2 id="areas-heading" class="visually-hidden">Areas of experience</h2>
      <div v-for="area in experienceAreas" :key="area.title" class="experience-item">
        <span class="experience-icon">
          <base-icon :icon-name="area.icon" :size="27" color="currentColor" aria-hidden="true" />
        </span>
        <div>
          <h3>{{ area.title }}</h3>
          <p>{{ area.description }}</p>
        </div>
      </div>
    </section>

    <section class="mobile-profile" aria-label="Profile details">
      <div class="mobile-identity">
        <image-title :img-url="profile.imgUrl" :profile-title="profile.profileTitle" />
        <social-networks />
      </div>
      <div class="mobile-profile-details">
        <education-info :object="profile.education" />
        <education-info :object="profile.languages" />
      </div>
    </section>

    <section class="technologies" aria-labelledby="technologies-heading">
      <h2 id="technologies-heading" class="type-section-title">Technologies I work with</h2>
      <div class="technology-groups">
        <section v-for="group in homeTechnologies" :key="group.title" class="technology-card">
          <h3>
            <base-icon :icon-name="group.icon" :size="25" color="currentColor" aria-hidden="true" />
            <span>{{ group.title }}</span>
          </h3>
          <ul class="technology-list">
            <li v-for="technology in group.technologies" :key="technology.name">
              <base-icon :icon-name="technology.icon" :size="36" aria-hidden="true" />
              <span>{{ technology.name }}</span>
            </li>
          </ul>
        </section>
      </div>
      <router-link :to="{ name: 'projects' }" class="complete-stack-link">
        Explore my projects for the complete stack.
      </router-link>
    </section>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'
import CvLink from '@/components/drawer-profile/CvLink.vue'
import EducationInfo from '@/components/drawer-profile/EducationInfo.vue'
import ImageTitle from '@/components/drawer-profile/ImageTitle.vue'
import SocialNetworks from '@/components/drawer-profile/SocialNetworks.vue'
import homeTechnologies from '@/utils/home-technologies.js'
import profile from '@/utils/profile.js'

const experienceAreas = [
  {
    title: 'Production debugging',
    description: 'Diagnose and resolve complex issues in production environments.',
    icon: 'wrench'
  },
  {
    title: 'Performance improvements',
    description: 'Improve application performance and reliability.',
    icon: 'performance'
  },
  {
    title: 'Open-source development',
    description: 'Build tools for the developer community.',
    icon: 'community'
  }
]
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  color: var(--text-color);
}
.hero,
.experience-areas,
.technology-card,
.mobile-profile {
  border: 1px solid rgba(181, 142, 245, 0.48);
  border-radius: var(--border-radius-page);
  background: linear-gradient(125deg, #211449 0%, #1c1242 58%, #27164f 100%);
}
.hero {
  padding: clamp(28px, 3vw, 42px);
}
.hero-intro {
  color: #d3b9ff;
  font-size: var(--type-small);
  font-weight: var(--weight-semibold);
  line-height: 1.4;
  letter-spacing: 0.19em;
}
.hero h1 {
  margin-top: 9px;
  font-size: clamp(36px, 4vw, 52px);
  line-height: 1.08;
  overflow-wrap: break-word;
}
.hero-subtitle {
  margin-top: 8px;
  color: #c6a4ff;
  font-size: clamp(22px, 2.5vw, 29px);
  font-weight: var(--weight-semibold);
  line-height: 1.25;
}
.hero-copy {
  display: grid;
  gap: 12px;
  max-width: 76ch;
  margin-top: 21px;
  color: #eee8fb;
  font-size: var(--type-body);
  font-weight: var(--weight-regular);
  line-height: 1.55;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
}
.hero-action {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 10px 21px;
  border: 1px solid #d6bdff;
  border-radius: 11px;
  font-size: var(--type-secondary);
  font-weight: var(--weight-semibold);
  line-height: 1.3;
  text-align: center;
  transition:
    background 180ms ease,
    border-color 180ms ease;
}
.primary-action {
  background: #dfd0ff;
  color: #201245;
}
.primary-action:hover {
  background: #f0e8ff;
}
.secondary-action {
  background: transparent;
  color: white;
}
.secondary-action:hover {
  background: #3a286b;
}
.hero-action:focus-visible,
.complete-stack-link:focus-visible {
  outline: 3px solid white;
  outline-offset: 3px;
}
.hero-actions .mobile-cv {
  display: none;
}
.experience-areas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
}
.experience-item {
  display: flex;
  flex: 1 1 250px;
  gap: 13px;
  min-width: 0;
  padding: 8px 16px;
  border: 1px solid rgba(184, 151, 235, 0.27);
  border-radius: 12px;
}
.experience-icon {
  display: grid;
  place-items: center;
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(184, 151, 235, 0.32);
  border-radius: 12px;
  background: #382565;
  color: #d9c2ff;
}
.experience-item h3 {
  font-size: 17px;
  line-height: 1.25;
}
.experience-item p {
  margin-top: 4px;
  color: #d9cfee;
  font-size: 15px;
  line-height: 1.4;
}
.technologies h2 {
  margin: 0 0 12px;
  color: white;
}
.technology-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.technology-card {
  flex: 1 1 300px;
  min-width: 0;
  padding: 20px;
}
.technology-card h3 {
  display: flex;
  align-items: center;
  gap: 11px;
  color: #f6f1ff;
  font-size: 20px;
  line-height: 1.25;
}
.technology-card h3 :deep(svg) {
  flex: none;
}
.technology-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px 8px;
  margin-top: 24px;
}
.technology-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 0;
  color: #eee8fa;
  font-size: 14px;
  font-weight: var(--weight-medium);
  line-height: 1.25;
  text-align: center;
  overflow-wrap: anywhere;
}
.complete-stack-link {
  width: fit-content;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px auto 0;
  padding: 4px 12px;
  color: #d7c0ff;
  font-size: 15px;
  line-height: 1.4;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.complete-stack-link:hover {
  color: white;
}
.mobile-profile {
  display: none;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
@media (max-width: 1024px) {
  .hero-actions .mobile-cv {
    display: flex;
    width: auto;
    min-height: 48px;
    font-size: var(--type-secondary);
  }
  .mobile-profile {
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
    gap: 20px;
    padding: 20px;
  }
  .mobile-identity {
    display: flex;
    flex-direction: column;
    gap: 14px;
    min-width: 0;
  }
  .mobile-identity :deep(.social-container) {
    margin: 0;
  }
  .mobile-profile-details {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
    align-content: start;
  }
}
@media (max-width: 700px) {
  .mobile-profile {
    grid-template-columns: 1fr;
  }
  .mobile-identity {
    align-items: center;
  }
  .mobile-identity :deep(.image-title) {
    width: min(100%, 210px);
  }
  .mobile-profile-details {
    grid-template-columns: 1fr;
  }
  .hero {
    padding: 26px 20px;
  }
}
@media (max-width: 480px) {
  .hero-actions {
    display: grid;
    grid-template-columns: 1fr;
  }
  .hero-action,
  .hero-actions .mobile-cv {
    width: 100%;
  }
  .experience-areas {
    padding: 8px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-action {
    transition: none;
  }
}
</style>
