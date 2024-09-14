import useForm from "../hooks/useForm";

// Función de validacion basica para el formulario
const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = 'El nombre es requerido';
    }
    if (!values.rol) {
        errors.rol = 'El rol es requerido';
    }
    return errors;
}

const EmpleadosForm = ({ onSubmit, initialValues = {nombre: '', role: ''}, editMode = false}) => {

    const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validate);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={values.nombre || ''}
                    onChange={handleChange}
                />
                {errors.nombre && <p className="error">{errors.nombre}</p>}
            </div>
            <div>
                <label htmlFor="rol">Rol</label>
                <input
                    type="text"
                    id="rol"
                    name="rol"
                    placeholder="Rol"
                    value={values.rol || ''}
                    onChange={handleChange}
                />
                {errors.rol && <p className="error">{errors.rol}</p>}
            </div>
            <button type="submit">{editMode ? 'Actualizar' : 'Crear'}</button>
        </form>
    )
}

export default EmpleadosForm;