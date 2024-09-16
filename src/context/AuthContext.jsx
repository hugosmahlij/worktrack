import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider ({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const navigate = useNavigate();

    const login = () => {
        // Simula un token que se guarda en el localStorage
        const token = 'tokenficticio1234';
        localStorage.setItem("token", token)
        setIsAuthenticated(true);
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