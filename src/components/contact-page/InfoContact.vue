<template>
    <div class="info-container">
        <title-generic :title="'My social networks!'"/>
        <social-networks />
    </div>
</template>

<script setup>
import TitleGeneric from '@/components/TitleGeneric.vue'
import SocialNetworks from '@/components/drawer-profile/SocialNetworks.vue'
</script>

<style scoped>
.info-container {
    display: flex;
    flex-direction: column;
    gap: var(--page-gap);
}
</style>