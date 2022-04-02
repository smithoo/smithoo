<template>
    <q-drawer show-if-above v-model="drawerOpen" :width="240" :breakpoint="500">
        <q-scroll-area class="fit menu-list">
            <q-list>
                <template v-for="m in menu" :key="m.id">
                    <q-expansion-item v-if="m.children && m.children.length" dense dense-toggle>
                        <template #header>
                            <q-item-section avatar class="q-pa-sm">
                                <q-icon :name="m.icon" size="18px" />
                            </q-item-section>

                            <q-item-section>{{ m.label }}</q-item-section>
                        </template>
                        <q-list>
                            <q-item
                                v-for="child in m.children"
                                :key="child.id"
                                active
                                clickable
                                v-ripple
                                dense
                                class="menu-item q-pt-sm q-pb-sm"
                            >
                                <q-icon :name="child.icon" size="18px" class="q-pl-lg" />
                                <span class="q-ml-sm">{{ child.label }}</span>
                            </q-item>
                        </q-list>
                    </q-expansion-item>
                    <q-item
                        v-else
                        active
                        clickable
                        v-ripple
                        dense
                        class="menu-item q-pt-sm q-pb-sm q-pl-lg"
                    >
                        <q-icon :name="m.icon" size="18px" />
                        <span class="q-ml-sm">{{ m.label }}</span>
                    </q-item>

                    <q-separator />
                </template>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';

interface MenuItem {
    id: string;
    icon: string;
    label: string;
    url?: string;
    children?: MenuItem[];
}

export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, { emit }) {
        const { modelValue } = toRefs(props);

        const drawerOpen = ref(false);

        const menu: MenuItem[] = [
            { id: 'home', icon: 'o_home', label: 'Home', url: '/' },
            { id: 'todo', icon: 'o_checklist', label: 'Todo', url: '/' },
            {
                id: 'article',
                icon: 'o_feed',
                label: 'Article',
                url: '/',
                children: [
                    {
                        id: 'home',
                        icon: 'o_home',
                        label: 'Home',
                        url: '/',
                    },
                ],
            },
            { id: 'ui_studio', icon: 'o_palette', label: 'UI Studio', url: '/' },
        ];

        watch(modelValue, (v) => {
            drawerOpen.value = v;
        });

        watch(drawerOpen, (v) => {
            emit('update:modelValue', v);
        });

        return { drawerOpen, menu };
    },
});
</script>

<style lang="scss">
.menu-list {
    padding-top: 2px;
    border-right: 1px solid #ddd;
    .menu-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
}
.q-item__section--avatar {
    min-width: 26px !important;
}
</style>
