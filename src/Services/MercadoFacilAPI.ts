import axios from 'axios';
import type { LoginData } from '../Interfaces/LoginData';

const apiClient = axios.create({
    baseURL: 'https://api.mercadofacil.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const LoginAPI = (loginData: LoginData) => {
    return apiClient.post('/Login/login', loginData);
}