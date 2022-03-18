<template>
    <div>
        <el-row class="mb-4">
            {{ data }}
            <el-button @click="call">Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            data: null as any,
        };
    },
    methods: {
        async call() {
            this.data = await this.$axios.get('/test');
        },
    },
});
</script>
