import { AxiosInstance } from 'axios';
import { Client } from '@urql/vue';
import { SmithooFirebase } from './firebase';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $api: AxiosInstance;
        $graphql: Client;
        $firebase: SmithooFirebase;
    }
}
