import axios from 'axios';
import type { LoginData } from '../Interfaces/LoginData';
import type { Usuario } from '../Interfaces/Usuario';
const apiClient = axios.create({
    baseURL: 'https://dnmkvtf8-7029.brs.devtunnels.ms',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const LoginAPI = (loginData: LoginData) => {
    return apiClient.post('/api/Login/login', loginData);
}

export const CriarUsuario = (dadosUsuario: Usuario) => {
    return apiClient.post('/User', dadosUsuario);
}