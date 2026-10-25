<template>
  <section class="form-container" aria-labelledby="message-heading">
    <div class="card-heading">
      <span class="heading-icon" aria-hidden="true">
        <base-icon icon-name="contact" :size="26" color="currentColor" />
      </span>
      <h2 id="message-heading" class="type-section-title">Send me a message</h2>
    </div>

    <form ref="form" method="POST" novalidate @submit.prevent="sendData">
      <input type="hidden" name="access_key" :value="accessKey" />
      <div class="fullname-wrapper">
        <input-form :object="fields.name" />
        <input-form :object="fields.lastname" />
      </div>
      <input-form :object="fields.email" />
      <text-area :object="fields.message" />
      <input type="checkbox" name="botcheck" class="honeypot" tabindex="-1" aria-hidden="true" />
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Sending…' : 'Send message' }}
      </button>
      <p
        v-if="status.message"
        class="form-status"
        :class="status.type"
        role="status"
        aria-live="polite"
      >
        {{ status.message }}
      </p>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import BaseIcon from '@/components/icons/BaseIcon.vue'
import InputForm from './InputForm.vue'
import TextArea from './TextArea.vue'

const fields = {
  name: {
    id: 'contact-first-name',
    name: 'name',
    label: 'First name',
    type: 'text',
    autocomplete: 'given-name',
    placeholder: 'Your first name'
  },
  lastname: {
    id: 'contact-last-name',
    name: 'lastname',
    label: 'Last name',
    type: 'text',
    autocomplete: 'family-name',
    placeholder: 'Your last name'
  },
  email: {
    id: 'contact-email',
    name: 'email',
    label: 'Email',
    type: 'email',
    autocomplete: 'email',
    placeholder: 'you@example.com'
  },
  message: {
    id: 'contact-message',
    name: 'message',
    label: 'Message',
    placeholder: 'Tell me about your opportunity or project…'
  }
}

const accessKey = 'f7f316ab-3366-4b07-abeb-b35c597b1340'
const form = ref(null)
const isSubmitting = ref(false)
const status = reactive({ type: '', message: '' })

async function sendData(event) {
  if (isSubmitting.value) return

  const formData = new FormData(event.currentTarget)
  const values = Object.fromEntries(formData)
  const missingField = ['name', 'lastname', 'email', 'message'].find(
    (field) => !String(values[field] || '').trim()
  )

  if (missingField) {
    status.type = 'error'
    status.message = 'Please fill in all form fields.'
    form.value?.elements.namedItem(missingField)?.focus()
    return
  }

  if (!form.value.elements.namedItem('email').checkValidity()) {
    status.type = 'error'
    status.message = 'Please enter a valid email address.'
    form.value.elements.namedItem('email').focus()
    return
  }

  isSubmitting.value = true
  status.type = 'sending'
  status.message = 'Sending your message…'

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(values)
    })
    const result = await response.json()

    if (!response.ok || result.success === false) {
      throw new Error(result.message || 'Please try again later.')
    }

    status.type = 'success'
    status.message = 'Message sent successfully!'
    form.value.reset()
  } catch (error) {
    status.type = 'error'
    status.message = `Could not send your message. ${error.message || 'Please try again later.'}`
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form-container {
  container-type: inline-size;
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
  margin-bottom: 20px;
}
.card-heading h2 {
  min-width: 0;
  font-size: clamp(21px, 2vw, 25px);
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
form {
  display: grid;
  gap: 16px;
}
.fullname-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.honeypot {
  display: none;
}
button {
  width: 100%;
  min-height: 48px;
  padding: 10px 18px;
  border: 0;
  border-radius: 10px;
  background: #dfceff;
  color: #1b1040;
  font-size: var(--type-secondary);
  font-weight: var(--weight-bold);
  cursor: pointer;
  transition: background 180ms ease;
}
button:hover:not(:disabled) {
  background: #eee3ff;
}
button:disabled {
  cursor: wait;
  opacity: 0.7;
}
button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}
.form-status {
  padding: 10px 12px;
  border-radius: 9px;
  font-size: var(--type-secondary);
  line-height: var(--leading-compact);
}
.form-status.sending {
  background: rgba(191, 163, 255, 0.14);
}
.form-status.success {
  background: rgba(77, 180, 145, 0.2);
}
.form-status.error {
  background: rgba(235, 101, 121, 0.2);
}
@container (max-width: 430px) {
  .fullname-wrapper {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (prefers-reduced-motion: reduce) {
  button {
    transition: none;
  }
}
</style>
