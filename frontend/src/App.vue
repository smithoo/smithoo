<template>
    <div>
        <q-btn color="white" text-color="black" label="Standard" @click="signIn" />
        <q-btn color="primary" label="Primary" @click="getResult" />
        <q-btn color="secondary" label="Secondary" @click="signOut" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { provideClient } from '@urql/vue';
import { signInGoogle, signOutGoogle, getGoogleAuthResult } from './firebase/auth';

export default defineComponent({
    setup() {
        const app = getCurrentInstance();
        const client = app?.appContext.config.globalProperties.$graphql;
        provideClient(client);

        function signIn() {
            signInGoogle();
        }

        function getResult() {
            getGoogleAuthResult();
        }

        function signOut() {
            signOutGoogle();
        }

        return {
            signIn,
            getResult,
            signOut,
        };
    },
});
</script>
