<template>
    <q-header class="bg-amber-8 text-white shadow-2">
        <q-toolbar>
            <q-btn dense flat round icon="o_menu" @click.stop="emitOpen()" />
            <q-toolbar-title>Smithoo's blog</q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup(props, { emit }) {
        function emitOpen() {
            emit('open');
        }

        return {
            emitOpen,
        };
    },
});
</script>
