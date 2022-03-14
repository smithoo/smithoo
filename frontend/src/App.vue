<template>
    <div>
        <el-row class="mb-4">
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
import axios from 'axios';
export default defineComponent({
    data() {
        return {
            data: null as any,
        };
    },
    methods: {
        async call() {
            this.data = await axios.get('http://localhost:2999/test');
        },
    },
});
</script>
