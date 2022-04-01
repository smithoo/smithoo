<template>
    <q-drawer show-if-above v-model="drawerOpen" :width="200" :breakpoint="500">
        <q-scroll-area class="fit menu-list">
            <q-list padding>
                <q-item active clickable v-ripple dense class="menu-item q-pt-sm q-pb-sm">
                    <q-icon name="o_home" size="18px" />
                    <span class="q-ml-sm">Home</span>
                </q-item>
                <q-separator key="test" />
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';

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

        watch(modelValue, (v) => {
            drawerOpen.value = v;
        });

        watch(drawerOpen, (v) => {
            emit('update:modelValue', v);
        });
        return { drawerOpen };
    },
});
</script>

<style lang="scss" scoped>
.menu-list {
    border-right: 1px solid #ddd;
    .menu-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
}
</style>
