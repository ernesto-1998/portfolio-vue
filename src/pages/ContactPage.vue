<template>
  <div class="contact-page">
    <header class="contact-heading">
      <h1 class="type-page-title">Let’s connect</h1>
      <p>Have an opportunity or a project in mind? I’d love to hear from you.</p>
    </header>

    <div class="contact-grid">
      <form-contact />
      <info-contact />
    </div>
  </div>
</template>

<script setup>
import FormContact from '@/components/contact-page/FormContact.vue'
import InfoContact from '@/components/contact-page/InfoContact.vue'
</script>

<style scoped>
.contact-page {
  container-type: inline-size;
  min-width: 0;
  color: var(--text-color);
}
.contact-heading {
  margin-bottom: 22px;
}
.contact-heading h1 {
  color: #ddc8ff;
}
.contact-heading p {
  margin-top: 5px;
  color: #e5d8ff;
  font-size: var(--type-body);
  font-weight: var(--weight-regular);
  line-height: var(--leading-compact);
}
.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 18px;
  align-items: stretch;
}
@container (max-width: 760px) {
  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 600px) {
  .contact-heading {
    margin-bottom: 18px;
  }
  .contact-grid {
    gap: 16px;
  }
}
</style>
