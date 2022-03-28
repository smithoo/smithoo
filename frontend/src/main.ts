import { createApp } from 'vue';
import axios from 'axios';
import { createClient } from '@urql/vue';
import App from './App.vue';
import { firebaseApp } from './firebase';

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
app.config.globalProperties.$graphql = client; // provide client in App.vue

console.log(firebaseApp);

app.mount('#app');
