import axios from 'axios';

const serverUrl = import.meta.env.VITE_SMITHOO_SERVER;

export default axios.create({
    baseURL: `${serverUrl}/api`,
    timeout: 5000,
});
