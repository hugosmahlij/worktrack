import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../context/AuthContext";

function PrivateRoute ({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoute;

// Este componente verifica si el ususario está autenticado, si no lo está redirige a la pagina login.