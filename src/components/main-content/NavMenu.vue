<template>
    <ul class="nav-container">
        <router-link :to="{name: item.link}" v-for="item in nav" :key="item.name" class="nav-item">
            <base-icon :icon-name="item.name" color="white" size="50"/>
            <h3>{{ item.title }}</h3>
        </router-link>
    </ul>
</template>

<script setup>
import nav from '@/utils/nav-menu.js'
import BaseIcon from '../icons/BaseIcon.vue';
</script>

<style scoped>
.nav-container {
    height: 100%;
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav-item {
    min-width: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: var(--backtitle-color);
    border-radius: var(--border-radius-title);
    padding: 10px;
    font-family: var(--title-font);
    font-weight: 700;
    color: var(--layout-color);
}
</style>