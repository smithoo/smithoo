<template>
    <el-row class="mb-4">
        <el-button @click="signIn">Google Sign-in</el-button>
        <el-button @click="getResult">Get result</el-button>
        <el-button @click="signOut" type="primary">Primary</el-button>
    </el-row>
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
