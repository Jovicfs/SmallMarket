import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/', // A URL base da sua API
});

export default api;