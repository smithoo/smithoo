import { createApp } from 'vue';
import axios from 'axios';
import urql, { createClient } from '@urql/vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
const serverBaseUrl = 'http://localhost:2999';

// axios
const axiosInstance = axios.create({
    baseURL: `${serverBaseUrl}/api`,
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
});
app.config.globalProperties.$axios = axiosInstance;

// graphql
const graphqlUrl = `${serverBaseUrl}/graphql`;
const client = createClient({ url: graphqlUrl });
app.use(urql, { url: graphqlUrl }); // provideClient로 변경 가능성 있음
app.config.globalProperties.$graphql = client;

// element ui
app.use(ElementPlus);

app.mount('#app');
