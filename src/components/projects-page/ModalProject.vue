<template>
    <dialog ref="dialog" class="dialog-wrapper">
        <div class="dialog-header">
            <a class="dialog-button" @click="closeModal">
                <i class="bx bx-x" id="close-icon"></i>
            </a>
        </div>
        <slot name="content"></slot>
    </dialog>
</template>

<script setup>
import { ref } from 'vue';


let dialog = ref()

const openModal = () => {
    dialog.value.showModal();
    dialog.value.scrollTop=0
}

const closeModal = () => {
    dialog.value.close();
}

defineExpose({
    openModal
})
</script>

<style scoped>
dialog[open] {
    -webkit-animation: show 1s ease normal;
    animation: show 0.5s ease normal;
}

@-webkit-keyframes show{
    from {
        transform: translateY(-110%);
    }
    to {
        transform: translateY(0%);
    }
}

@keyframes show{
    from {
        transform: translateY(-110%);
    }
    to {
        transform: translateY(0%);
    }
}

.dialog-wrapper {
    position: relative;
    margin: auto;
    max-height: 97dvh;
    background-color: var(--backtitle-color);
}

.dialog-wrapper::backdrop {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

.dialog-header {
    position: sticky;
    top: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--element-color);
}

.dialog-button {
    padding: 5px;
    font-size: 35px;
}

.dialog-button:hover {
    cursor: pointer;
}

@media (min-width: 1025px) {
    .dialog-wrapper {
        max-width: 75%;
    }
}

@media (max-width: 1024px) {
    .dialog-wrapper {
        max-width: 97%;
    }
}
</style>