import { Link } from 'react-router-dom';

function Navbar ({ isPrivate }) {
    return (
        <nav>
            <ul>
                {isPrivate ? (
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/empleados">Empleados</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;