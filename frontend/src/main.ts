import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import { createClient } from '@urql/vue';
import { firebaseApp } from './firebase';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/material-icons-outlined';
// Import icon libraries
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const app = createApp(App);

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    iconSet: quasarIconSet,
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
});

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
