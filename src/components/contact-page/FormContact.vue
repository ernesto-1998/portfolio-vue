<template>
    <div class="form-wrapper">
        <h1>Send me an email!</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" ref="key">
            <div class="fullname-wrapper">
                <input-form :object="props.name"/>
                <input-form :object="props.lastname"/>
            </div>
            <input-form :object="props.email"/>
            <text-area :object="props.textarea"/>
            <div class="h-captcha" data-captcha="true"></div>
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
            <div class="button-wrapper"><button type="submit">Subtmit</button></div>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
// f7f316ab-3366-4b07-abeb-b35c597b1340
import InputForm from './InputForm.vue';
import TextArea from './TextArea.vue';

onMounted(() => {
    key.value = 'f7f316ab-3366-4b07-abeb-b35c597b1340'
})

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

// const YOUR_ACCESS_KEY_HERE = ref('f7f316ab-3366-4b07-abeb-b35c597b1340')
let key = ref(null)
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

@media (max-width: 768px) {
    .fullname-wrapper {
        grid-template-columns: 1fr;
    }
}
</style>