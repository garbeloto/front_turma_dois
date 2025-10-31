import type { LoginData } from "../../Interfaces/LoginData";
import { useState } from "react";
import { LoginAPI } from "../../Services/MercadoFacilAPI";
const Login = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    });

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const handleSubmit = async(event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault();
        try {
            const response = await LoginAPI(loginData);
            if (response.data && response.status === 200) {               
                sessionStorage.setItem('token', response.data.token);               
            } else {
                alert('Falha no login. Verifique suas credenciais.');
            }         
        } catch (e: Error | any) {
            console.error("Erro ao chamar a API:", e);
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="spacer">
                    <h3>Mercado Fácil</h3>
                </div>
                <div className="LoginForm">
                    <form className="login-form-inline">
                        <input 
                            id = "text_mail"
                            type = "text"
                            name = "email"
                            placeholder="E-mail"
                            value={loginData.email}
                            onChange={handleLogin}
                        />
                        <input 
                            id = "password"
                            type = "password"
                            name = "password"                            
                            placeholder="Senha"
                            value={loginData.password}
                            onChange={handleLogin}
                        />
                        <button 
                            className="submit-button"
                            onClick={handleSubmit}
                            >Entrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;