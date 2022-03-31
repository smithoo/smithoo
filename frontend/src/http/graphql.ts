import { createClient } from '@urql/vue';

const serverUrl = import.meta.env.VITE_SMITHOO_SERVER;

const graphqlUrl = `${serverUrl}/graphql`;
export default createClient({ url: graphqlUrl });
