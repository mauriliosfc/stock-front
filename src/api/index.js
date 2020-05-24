import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-stock-node.herokuapp.com/'
});

export default api;