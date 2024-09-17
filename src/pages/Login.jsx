import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import useForm from "../hooks/useForm";
import '../styles/login.css'

function Login () {

    const { login } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const validate = (values) => {
        let errors = {};
        if (!values.username) errors.username = 'El usuario es requerido';
        if (!values.password) errors.password = 'La contraseña es requerida';
        return errors;
    }

    const { values, errors, handleChange, handleSubmit } = useForm({ username: '', password: '' },
        validate //funcion de validacion
    )

    const onSubmit = async () => {
        try {
            // Llamo a la funcion login del contexto
            await login(values.username, values.password);
        } catch (error) {
            alert('Credenciales incorrectas');
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="login-title">Login Page</h2>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange} />
                    {errors.username && <p className="error-message">{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <div className="password-container">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password" value={values.password}
                            onChange={handleChange} />
                        <button
                            type="button"
                            className="password-toggle-button"
                            onClick={() => setPasswordVisible(!passwordVisible)}>
                            {passwordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <button
                    type="submit"
                    className="login-button">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;