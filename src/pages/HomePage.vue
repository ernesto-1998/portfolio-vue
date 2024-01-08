<template>
    <div class="home-container">
        <title-generic :title="props['title_generic'].title"/>
        <div class="home-body">
            <info-card :text="props['info_card'].text"/>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

import TitleGeneric from '@/components/TitleGeneric.vue';
import InfoCard from '@/components/home-page/InfoCard.vue';

const props = reactive({
    title_generic: {
        title: 'Hi! My name is Ernesto and I am a Web Developer! 🤖'
    },
    info_card: {
        text: 'Hello, nice to meet you!🤗 I am a software engineer with three years of experience specializing in web development. My passion lies in technology, and I thoroughly enjoy taking on challenges. If you have any new ventures or projects in mind, I would be delighted to be a part of them.😎'
    }
})
</script>

<style scoped>
.home-body {
    display: grid;
    grid-template-columns: 40% 1fr;
    margin-top: 25px;
}
</style>