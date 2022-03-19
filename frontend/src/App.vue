<template>
    <el-container>hello, world</el-container>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { provideClient } from '@urql/vue';

export default defineComponent({
    setup() {
        const app = getCurrentInstance();
        const client = app?.appContext.config.globalProperties.$graphql;
        provideClient(client);
    },
});
</script>
