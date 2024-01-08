<template>
    <div class="title-container">
        <h1 class="title">
            {{ title }}
        </h1>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>
.title-container {
    text-align: center;
}
.title {
    display: inline;
    font-family: var(--text-font);
    color: var(--layout-color);
    padding: 7px 15px;
    background-color: var(--element-color);
    text-align: center;
    border-radius: var(--border-radius-page);
    font-size: 27px;
}
</style>