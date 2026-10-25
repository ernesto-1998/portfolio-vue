<template>
  <div class="field">
    <label :for="object.id">{{ object.label }}</label>
    <textarea
      :id="object.id"
      :name="object.name"
      :placeholder="object.placeholder"
      rows="5"
      required
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  object: { type: Object, required: true }
})
</script>

<style scoped>
.field {
  display: grid;
  gap: 7px;
  min-width: 0;
}
label {
  color: #f5efff;
  font-size: var(--type-secondary);
  font-weight: var(--weight-medium);
  line-height: var(--leading-compact);
}
textarea {
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 110px;
  padding: 11px 13px;
  border: 1px solid rgba(190, 157, 247, 0.56);
  border-radius: 9px;
  outline: none;
  background: #23144d;
  color: var(--text-color);
  font-size: var(--type-secondary);
  font-weight: var(--weight-regular);
  line-height: var(--leading-body);
  resize: vertical;
}
textarea::placeholder {
  color: #b9a4db;
  opacity: 1;
}
textarea:focus-visible {
  border-color: #e0c9ff;
  outline: 3px solid rgba(221, 201, 255, 0.55);
  outline-offset: 2px;
}
</style>
