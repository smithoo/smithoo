<template>
    <q-layout view="hHh Lpr lff">
        <HeaderBar @open="toggleDrawer" />

        <NavMenu v-model="drawerOpen" />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue';
import { provideClient } from '@urql/vue';
import HeaderBar from './views/layouts/HeaderBar.vue';
import NavMenu from './views/layouts/NavMenu.vue';

export default defineComponent({
    components: { HeaderBar, NavMenu },
    setup() {
        const app = getCurrentInstance();
        const globalProperties = app?.appContext.config.globalProperties;
        const graphql = globalProperties?.$graphql;
        provideClient(graphql);

        const drawerOpen = ref(false);

        function toggleDrawer() {
            drawerOpen.value = !drawerOpen.value;
        }

        return {
            drawerOpen,
            toggleDrawer,
        };
    },
});
</script>
