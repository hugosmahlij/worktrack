import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";


function Login () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // aquí iría logica de validacion pero usaremos el useForm para eso

        if (username === 'admin' && password === 'admin') {
            login();
            navigate('/');
        } else {
            alert('Credenciales incorrectas')
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;