import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider ({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const navigate = useNavigate();

    const login = async (username, password) => {
        try {
            const response = await axios.get('http://localhost:3001/usuarios');
            const usuarios = response.data;

            const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

            if (usuarioEncontrado) {
                // Simula un token que se guarda en el localStorage
                const token = 'tokenficticio1234';
                localStorage.setItem("token", token)
                setIsAuthenticated(true);
                navigate('/')
            } else {
                alert ("Usuario o contraseña incorrectos")
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión: ', error)
        }
    }

    const logout = () => {
        // Elimina el token y cambia el estado de Auth
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;