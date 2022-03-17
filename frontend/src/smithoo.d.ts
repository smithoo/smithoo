import { AxiosInstance } from 'axios';
import { Client } from '@urql/vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
        $graphql: Client;
    }
}
