<template>
    <div>
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
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

export default defineComponent({
    setup() {
        const app = getCurrentInstance();
        const globalProperties = app?.appContext.config.globalProperties;
        const graphql = globalProperties?.$graphql;
        provideClient(graphql);

        return {};
    },
});
</script>
