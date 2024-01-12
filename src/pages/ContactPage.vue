<template>
  <div class="page-container">
    <title-generic title="Contact me! 😍" class="display"/>
    <div class="form-body">
      <form-contact />
      <info-contact />
    </div>
  </div>
</template>

<script setup>
import TitleGeneric from '@/components/TitleGeneric.vue'
import FormContact from '@/components/contact-page/FormContact.vue'
import InfoContact from '@/components/contact-page/InfoContact.vue'
</script>
<style scoped>
.form-body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

@media (max-width: 1024px) {
    .form-body {
      grid-template-columns: 1fr;
    }
}

@media (min-width: 1024px) {
  .display {
    display: none;
  }
}
</style>
