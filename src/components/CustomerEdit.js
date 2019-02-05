import React from 'react';
import PropTypes from 'prop-types';
// Importamos la libreria de redux form para activar los formularios y enlazarlo al reducer
import { reduxForm, Field } from 'redux-form';
// Con el componente Field, mostramos cada elemento del formularios
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';


// Creo las dos funciones de validacion sobre los campos del formulario

// La primera valida si el campo esta vacio y retorna un texto
const isRequired = value => (
    !value && "Este campo es requerido"
);

const minLength = value => (
    value.length < 2 && "Este campo debe contener mas de 2 letras" 
);

// Validacion si es numero
const isNumber = value => (
    // Si el valor no es numero
    isNaN(Number(value)) && "El campo debe ser numero"
);

// La otra atrapa ese texto y lo muestra en un span
// Tambien puedo pasar el tipo de campo si esta definido
const myField = ({ input, meta, type, name, label }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={ !type ? "text" : type } />
        { meta.touched && meta.error && <span>{meta.error}</span> }
    </div>
);

const CustomerEdit = ({ name, dni, age }) =>{
    return(
        <div>
            <h2>Formulario de edicion Cliente</h2>
            <form action="">
                <Field 
                    name="name" 
                    component={myField} 
                    type="text"
                    validate={[isRequired, minLength]}
                    label="Nombre"
                ></Field>
                <Field 
                    name="dni" 
                    component={myField} 
                    type="text"
                    validate={[isRequired, isNumber]}
                    label="DNI"
                ></Field>
                <Field 
                    name="age" 
                    component={myField} 
                    type="number"
                    validate={[isRequired, isNumber]}
                    label="Edad"
                ></Field>                         
            </form>
        </div>
    );
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number
}

// Para enlazar el componente al reducer decoramos con el metodo reduxForm, el cual nos devuelve un objeto con una key llamada form. la cual debemos pasarle el nombre id de nuestro formulario
const CustomerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);