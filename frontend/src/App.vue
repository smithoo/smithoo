<template>
    <div>
        <button type="button" @click="signIn">Google Sign-in</button>
        <button type="button" @click="getResult">Get result</button>
        <button type="button" @click="signOut">Primary</button>
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
