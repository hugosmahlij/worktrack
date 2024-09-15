import { useState, useEffect } from "react";
import axios from 'axios';
import EmpleadosForm from "../components/EmpleadosForm";
import '../styles/empleados.css'


function Empleados () {

    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formValues, setFormValues] = useState({ nombre: '', rol: '' });
    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false)

    // Funcion para obtener los empleados desde el servidor
    const fetchEmpleados = async () => {
        try {
            const response = await axios.get('http://localhost:3001/empleados'); // URL del json-server
            setEmpleados(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error al obtener empleados', err.response || err.message);
            setError('Error al obtener empleados');
            setLoading(false);
        }
    };

    // Funcion para agregar un nuevo empleado
    const agregarEmpleado = async (values) => {
        try {
            const response = await axios.post('http://localhost:3001/empleados', {
                name: values.nombre,
                role: values.rol
            });
            setEmpleados([...empleados, response.data]); // aqui se añade un nuevo empleado a la lista
            setShowForm(false);
        } catch (err) {
            console.error('Error al agregar el empleado', err.response || err.message);
            setError('Error al agregar el empleado')
        }
    }

    // Funcion para editar un empleado
    const editarEmpleado = async (values) => {
        try {
            const response = await axios.patch(`http://localhost:3001/empleados/${editingId}`, { name: values.nombre, role: values.rol })
            setEmpleados(empleados.map(emp => emp.id === editingId ? response.data : emp));
            setEditMode(false);
            setEditingId(null);
            setFormValues({ nombre: '', rol: '' });
            setShowForm(false)
        } catch (err) {
            console.error('Error al actualizar el empleado', err.response || err.message);
            setError('Error al actualizar');
        }
    }

    // Funcion para activar el modo edicion
    const handleEdit = (empleado) => {
        setFormValues({ nombre: empleado.name, rol: empleado.role });
        setEditMode(true);
        setEditingId(empleado.id);
        setShowForm(true)
    }

    // Funcion para cancelar la edicion
    const handleCancelEdit = () => {
        setEditMode(false);
        setEditingId(null);
        setFormValues({ nombre: '', rol: '' });
        setShowForm(false)
    }

    //Funcion para eliminar un empleado
    const eliminarEmpleado = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/empleados/${id}`)
            setEmpleados(empleados.filter(empleado => empleado.id !== id))
        } catch (err) {
            console.error('Error al eliminar el empleado', err.response || err.message);
            setError('Error al eliminar el empleado');
        }
    }

    // Obtener empleados al montar el componente
    useEffect(() => {
        fetchEmpleados()
    }, []);

    if (loading) return <p>Cargando empleados...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2 className="page-title">Lista de Empleados</h2>

            {/* Aqui se renderizaran los empleados*/}
            <div className="empleados-list">
                {empleados.map((empleado) => (
                    <div className="empleado-card" key={empleado.id}>
                        <div>{empleado.name}</div>
                        <div>{empleado.role}</div>
                        <div className="button-container">
                            <button className="button button-edit" onClick={() => handleEdit(empleado)}>Editar</button>
                            <button className="button button-delete" onClick={() => eliminarEmpleado(empleado.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Boton para mostrar el formulario */}
            <button className="button-add" onClick={() => { setShowForm(!showForm); setEditMode(false); }}>Agregar empleado</button>

            {/* Formulario para agregar o editar un empleado */}
            {showForm && (
                <div className="empleados-form-container">
                    <h3>{editMode ? 'Editar empleado' : 'Agregar nuevo empleado'}</h3>
                    <EmpleadosForm
                        onSubmit={editMode ? editarEmpleado : agregarEmpleado}
                        initialValues={formValues}
                        editMode={editMode}
                    />
                    {editMode && <button className="button button-cancel" onClick={handleCancelEdit}>Cancelar</button>}
                </div>
            )}
        </div >
    )
}

export default Empleados;