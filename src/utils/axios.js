import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:5000/api',
});

instanse.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
})

export default instanse;