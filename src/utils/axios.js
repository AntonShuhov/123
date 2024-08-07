import axios from "axios";

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
})

// $api.interceptors.request.use(request => {
//     console.log('Запрос:', request);
//     return request;
// });

export default $api;