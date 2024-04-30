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
}

const closeModal = () => {
    dialog.value.close();
}

defineExpose({
    openModal
})
</script>

<style scoped>
.dialog-wrapper {
    position: absolute;
    min-width: 97%;
    margin: auto;
    min-height: 97dvh;
    background-color: var(--backtitle-color);
}

.dialog-wrapper::backdrop {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

.dialog-header {
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
</style>