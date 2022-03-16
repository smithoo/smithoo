import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import urql from '@urql/vue';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.use(urql, {
    url: 'http://localhost:2999/graphql',
});

app.mount('#app');
