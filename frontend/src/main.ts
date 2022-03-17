import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import urql, { createClient } from '@urql/vue';
import App from './App.vue';

const app = createApp(App);

const client = createClient({
    url: 'http://localhost:3000/graphql',
});

app.use(ElementPlus);
app.use(urql, {
    url: 'http://localhost:2999/graphql',
});

app.config.globalProperties.$graphql = client;

app.mount('#app');
