import useForm from "../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/signup.css';

function SignUp () {
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};
        if (!values.username) errors.username = 'El usuario es requerido';
        if (!values.password) errors.password = 'La constraseña es requerida';
        return errors;
    }

    const { values, errors, handleChange, handleSubmit } = useForm({ username: '', password: '' }, validate);

    const onSubmit = async () => {
        try {
            // Guarda el ususario en la base de datos
            await axios.post('http://localhost:3001/usuarios', {
                username: values.username,
                password: values.password,
            });
            // Redirigir al login después de crear el ususario
            navigate('/login')
        } catch (error) {
            console.error('Error al crear el ususario: ', error.response || error.nessage);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="signup-title">Sign up</h2>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" className="signup-button">Create Account</button>
            </form>
        </div>
    )
}

export default SignUp;