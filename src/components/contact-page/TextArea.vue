<template>
    <textarea :name="props.object.name" :placeholder="props.object.placeholder" id="" cols="30" rows="7" required></textarea>
</template>
<script setup>

const props = defineProps({
    object: {
        type: Object,
        required: true,
    }
})

</script>
<style scoped>

textarea {
    font-family: var(--text-font);
    width: 100%;
    padding: 10px;
    background-color: var(--backtitle-color);
    color: var(--layout-color);
    border: none;
    outline: none;
    transition: 0.3s ease-in-out;
}

textarea::placeholder {
    color: var(--layout-color);
}

textarea:focus {
    background-color: var(--backtitle-v2-color);
}

</style>