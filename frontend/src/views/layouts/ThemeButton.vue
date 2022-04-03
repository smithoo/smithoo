<template>
    <q-toggle
        v-model="isDarkMode"
        checked-icon="o_dark_mode"
        color="yellow-7"
        unchecked-icon="o_light_mode"
        icon-color="black"
        size="40px"
    />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { THEME_KEY } from './../../declaration/constants';
import { THEME } from './../../declaration/enums';

export default defineComponent({
    setup() {
        const $q = useQuasar();
        const savedTheme = $q.localStorage.getItem(THEME_KEY) || THEME.LIGHT;
        const isDarkMode = ref(savedTheme === THEME.DARK);

        watch(
            isDarkMode,
            (isDark) => {
                const theme = isDark ? THEME.DARK : THEME.LIGHT;
                $q.localStorage.set(THEME_KEY, theme);
                $q.dark.set(isDark);
            },
            { immediate: true },
        );

        // toggle
        return {
            isDarkMode,
        };
    },
});
</script>
