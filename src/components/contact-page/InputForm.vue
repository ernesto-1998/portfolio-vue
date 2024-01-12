<template>
    <div class="input-wrapper">
        <input :name="props.object.name" :type="props.object.type" :placeholder="props.object.placeholder" :style="{paddingLeft: getPadding}">
        <base-icon v-if="props.object.icon !== null" :icon-name="props.object.icon.name" :size="props.object.icon.size" :color="props.object.icon.color" id="icon"/>
    </div>
</template>
<script setup>
import { computed } from 'vue';

import BaseIcon from '@/components/icons/BaseIcon.vue'

const props = defineProps({
    object: {
        type: Object,
        required: true,
    }
})

const getPadding = computed(() => {
    return props.object.icon ? '35px': '5px'
})
</script>
<style scoped>
.input-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    font-family: var(--text-font);
    width: 100%;
    height: 35px;
    background-color: var(--backtitle-color);
    color: var(--layout-color);
    border: none;
    outline: none;
    transition: 0.3s ease-in-out;
}

input::placeholder {
    color: var(--layout-color);
}

input:focus {
    background-color: var(--backtitle-v2-color);
}

#icon {
    position: absolute;
    left: 5px;
}

</style>