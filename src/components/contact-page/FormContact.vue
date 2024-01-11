<template>
    <div class="form-wrapper">
        <h1>Send me an email!</h1>
        <form action="(e) => console.log(e)" method="post">
            <div class="fullname-wrapper">
                <input-form :type="props.name.type" :place-holder="props.name.placeholder" :icon="props.name.icon"/>
                <input-form :type="props.lastname.type" :place-holder="props.lastname.placeholder" :icon="props.lastname.icon"/>
            </div>
            <input-form :type="props.email.type" :place-holder="props.email.placeholder" :icon="props.email.icon"/>
            <text-area :place-holder="props.textarea.placeholder"/>
            <div class="button-wrapper"><button type="submit">Subtmit</button></div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

import InputForm from './InputForm.vue';
import TextArea from './TextArea.vue';

const props = reactive({
    name: {
        type: 'text',
        placeholder: 'Introduce your name...',
        name: 'name',
        icon: {
            name: 'user',
            size: 25,
            color: 'white'
        },
    },
    lastname: {
        type: 'text',
        placeholder: 'Introduce your lastname...',
        name: 'lastname',
        icon: {
            name: 'user',
            size: 25,
            color: 'white'
        },
    },
    email: {
        type: 'email',
        placeholder: 'Introduce your email...',
        name: 'email',
        icon: {
            name: 'contact',
            size: 23,
            color: 'white'
        },
    },
    textarea: {
        name: 'message',
        placeholder: 'how can i help you...'
    }
})
</script>

<style scoped>
.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--element-color);
    padding: 20px;
    color: var(--layout-color);
    font-family: var(--title-font);
    border-radius: var(--border-radius-page);
}

h1 {
    font-weight: 700;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.fullname-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.button-wrapper {
    display: flex;
    justify-content: center;
}

button {
    padding: 15px 30px;
    background-color: var(--backtitle-color);
    border-radius: var(--border-radius-title);
    border: 1px solid var(--layout-color);
    color: var(--layout-color);
    font-family: var(--title-font);
    font-weight: 700;
    font-size: 20px;
    transition: 0.3s ease-in;
}

button:hover {
    cursor: pointer;
    background-color: var(--element-color);
}

/* @media (max-width: 1024px) {

} */
</style>