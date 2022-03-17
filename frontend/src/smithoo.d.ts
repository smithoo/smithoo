import { Client } from '@urql/vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $graphql: Client;
    }
}
