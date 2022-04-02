<template>
    <q-layout view="hHh Lpr lff">
        <HeaderBar @open="toggleDrawer" />

        <NavMenu v-model="drawerOpen" />
        <q-page-container class="container">
            <div class="contents">
                <q-scroll-area :visible="false" class="fit">
                    <q-layout>
                        <router-view />
                        <q-page-scroller
                            position="bottom-right"
                            :scroll-offset="200"
                            :offset="[12, 12]"
                        >
                            <q-btn fab-mini icon="o_keyboard_arrow_up" color="primary" />
                        </q-page-scroller>
                    </q-layout>
                </q-scroll-area>
            </div>
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

<style lang="scss" scoped>
.container {
    position: relative;
    height: 100vh;
    .contents {
        position: relative;
        width: 100%;
        height: 100%;
    }
}
</style>
