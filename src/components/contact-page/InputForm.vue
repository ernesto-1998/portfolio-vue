<template>
    <div class="input-wrapper">
        <input :name="name" :type="props.type" :placeholder="props.placeHolder" :style="{paddingLeft: getPadding}">
        <base-icon v-if="props.icon !== null" :icon-name="props.icon.name" :size="props.icon.size" :color="props.icon.color" id="icon"/>
    </div>
</template>
<script setup>
import { computed } from 'vue';

import BaseIcon from '@/components/icons/BaseIcon.vue'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text'
    },
    placeHolder: {
        type: String,
        default: ''
    },
    icon: {
        type: Object,
        default: null,
    }
})

const getPadding = computed(() => {
    return props.icon ? '35px': '5px'
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