import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import api from './http/api';
import graphql from './http/graphql';

import firebase from './firebase';

// Quasar
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/material-icons-outlined';
// Quasar css
import 'quasar/src/css/index.sass';
// Quasar icon libraries
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';

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
app.use(router);
app.config.globalProperties.$api = api;
app.config.globalProperties.$graphql = graphql;
app.config.globalProperties.$firebase = firebase;

app.mount('#app');
