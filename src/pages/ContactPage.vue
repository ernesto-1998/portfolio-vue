<template>
  <div class="page-container">
    <title-generic title="Contact me! 😍" />
    <div class="form-body">
      <form-contact />
    </div>
  </div>
</template>

<script setup>
import TitleGeneric from '@/components/TitleGeneric.vue'
import FormContact from '@/components/contact-page/FormContact.vue'
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
</style>
