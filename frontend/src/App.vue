<template>
    <div>
        <HeaderBar />
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { provideClient } from '@urql/vue';
import HeaderBar from './views/layouts/HeaderBar.vue';

export default defineComponent({
    components: { HeaderBar },
    setup() {
        const app = getCurrentInstance();
        const globalProperties = app?.appContext.config.globalProperties;
        const graphql = globalProperties?.$graphql;
        provideClient(graphql);

        return {};
    },
});
</script>
