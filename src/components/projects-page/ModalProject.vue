<template>
  <dialog
    ref="dialog"
    class="dialog-wrapper"
    :aria-labelledby="titleId"
    @close="onClose"
    @keydown="onKeydown"
    @click="onBackdropClick"
  >
    <div class="dialog-header">
      <button
        ref="closeButton"
        class="dialog-button"
        type="button"
        aria-label="Close project details"
        @click="closeModal"
      >
        <base-icon icon-name="close" :size="24" color="currentColor" aria-hidden="true" />
      </button>
    </div>
    <slot />
  </dialog>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'
import BaseIcon from '@/components/icons/BaseIcon.vue'

defineProps({ titleId: { type: String, required: true } })
const dialog = ref(null)
const closeButton = ref(null)
let opener = null
let scrollContainer = null
let previousBodyOverflow = ''
let previousContainerOverflow = ''

function openModal(button) {
  if (dialog.value.open) return
  opener = button || document.activeElement
  scrollContainer = dialog.value.closest('article')
  previousBodyOverflow = document.body.style.overflow
  previousContainerOverflow = scrollContainer?.style.overflowY || ''
  document.body.style.overflow = 'hidden'
  if (scrollContainer) scrollContainer.style.overflowY = 'hidden'
  dialog.value.showModal()
  dialog.value.scrollTop = 0
  nextTick(() => closeButton.value?.focus())
}

function closeModal() {
  if (dialog.value?.open) dialog.value.close()
}

function onClose() {
  document.body.style.overflow = previousBodyOverflow
  if (scrollContainer) scrollContainer.style.overflowY = previousContainerOverflow
  scrollContainer = null
  if (opener?.isConnected) opener.focus({ preventScroll: true })
  opener = null
}

function onKeydown(event) {
  if (event.key !== 'Tab') return
  const focusable = [
    ...dialog.value.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ].filter((element) => !element.disabled && element.getClientRects().length)
  if (!focusable.length) {
    event.preventDefault()
    dialog.value.focus()
    return
  }
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

function onBackdropClick(event) {
  if (event.target !== dialog.value) return
  const bounds = dialog.value.getBoundingClientRect()
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    closeModal()
}

onBeforeUnmount(() => {
  if (dialog.value?.open) {
    closeModal()
    document.body.style.overflow = previousBodyOverflow
    if (scrollContainer) scrollContainer.style.overflowY = previousContainerOverflow
  }
})

defineExpose({ openModal })
</script>

<style scoped>
.dialog-wrapper {
  width: min(1220px, calc(100vw - 32px));
  max-width: none;
  max-height: min(88dvh, 950px);
  margin: auto;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  color: var(--text-color);
  background: #21134f;
  border: 1px solid #a674f5;
  border-radius: 20px;
  box-shadow: 0 26px 75px rgba(10, 3, 39, 0.55);
}
.dialog-wrapper::backdrop {
  background: rgba(10, 5, 35, 0.68);
  backdrop-filter: blur(4px);
}
.dialog-header {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  height: 0;
}
.dialog-button {
  display: grid;
  place-items: center;
  flex: none;
  width: 44px;
  height: 44px;
  margin: 10px 10px 0 0;
  border: 1px solid rgba(220, 197, 255, 0.62);
  border-radius: 50%;
  background: #352068;
  color: white;
  cursor: pointer;
}
.dialog-button:hover {
  background: #523486;
}
.dialog-button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}
@media (max-width: 600px) {
  .dialog-wrapper {
    width: calc(100vw - 16px);
    max-height: calc(100dvh - 20px);
  }
}
</style>
