import { useState, useEffect } from "react";
import axios from 'axios';


function Empleados () {

    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Funcion para obtener los empleados desde el servidor
    const fetchEmpleados = async () => {
        try {
            const response = await axios.get('http://localhost:3001/empleados'); // URL del json-server
            if (!response.ok) {
                throw new Error('Error al obtener empleados');
            }
            const data = await response.json();
            setEmpleados(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    
    useEffect(() => {
        fetchEmpleados()
    }, []);

    if (loading) return <p>Cargando empleados...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2>Lista de Empleados</h2>
            {/* Aqui se renderizaran los empleados*/}
            <ul>
                {empleados.map((empleado) => (
                    <li key={empleado.id}>
                        {empleado.name} - {empleado.role}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Empleados;