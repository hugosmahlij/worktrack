import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

function Navbar ({ isPrivate }) {

    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    }

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                {isPrivate ? (
                    <>
                        <li className='navbar-item'><Link to="/">Home</Link></li>
                        <li className='navbar-item'><Link to="/empleados">Empleados</Link></li>
                        <li className='navbar-item'><a href='/login' onClick={handleLogout}>Logout</a></li>
                    </>
                ) : (
                    <li className='navbar-item'><Link to="/signup">Sign Up</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;