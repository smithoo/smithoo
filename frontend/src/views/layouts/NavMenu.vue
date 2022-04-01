<template>
    <q-drawer show-if-above v-model="drawerOpen" :width="200" :breakpoint="500">
        <q-scroll-area class="fit nav-scroll">
            <q-list padding class="menu-list">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="o_inbox" />
                    </q-item-section>

                    <q-item-section> Inbox </q-item-section>
                </q-item>

                <q-item active clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="o_star" />
                    </q-item-section>

                    <q-item-section> Star </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="o_send" />
                    </q-item-section>

                    <q-item-section> Send </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="o_drafts" />
                    </q-item-section>

                    <q-item-section> Drafts </q-item-section>
                </q-item>
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
.nav-scroll {
    border-right: 1px solid #ddd;
}
</style>
