import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";

function Login () {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.username) errors.username = 'El usuario es requerido';
        if (!values.password) errors.password = 'La contraseña es requerida';
        return errors;
    }

    const { values, errors, handleChange, handleSubmit } = useForm({ username: '', password: '' },
        validate //funcion de validacion
    )

    const onSubmit = () => {
        if (values.username === 'admin' && values.password === 'admin') {
            login();
            navigate('/');
        }else {
            alert('Credenciales incorrectas');
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;