import React from 'react';
import PropTypes from 'prop-types';
// Importamos la libreria de redux form para activar los formularios y enlazarlo al reducer
import { reduxForm, Field } from 'redux-form';
// Con el componente Field, mostramos cada elemento del formularios
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
// Importamos la Botonera
import CustomersActions from './CustomersActions';
// importamos el Prompt para validacion
import { Prompt } from 'react-router-dom';


// Creo las dos funciones de validacion sobre los campos del formulario

// La primera valida si el campo esta vacio y retorna un texto
/*const isRequired = value => (
    !value && "Este campo es requerido"
);*/

// Validacion de forma global
const validate = values => {
    // creo un objeto vacio que atraves de la validacion ira llenando dinamicamente el objeto con los mensajes de validacion
    const error = {}

    // Se llama values + el nombre del campo del field
    if(!values.name) {
        error.name = "El campo nombre es requerido"
    } 
    
    if(!values.dni){
        error.dni = "El campo DNI es requerido"
    }

    return error;
}

const minLength = value => {
    if(value === undefined){
        return;
    } else if(value.length < 2){
        return "Este campo debe contener mas de 2 numeros"
    }
}

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


// Con esta funcion convertimos el valor de age en numerico para guardarlo en el store
const toNumber = value => value && Number(value);
// Puedo parsear los elementos convirtiendo las letras a mayusculas o minusculas
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
// Con el metodo format, tomamos el valor original del store y lo convertimos antes de enviarlo de nuevo

// Con el metodo normalize, agregamos logica a los valores parseados en el elemento
const onlyGrow = (value, previousValue, values) => value && previousValue && (value > previousValue ? value : previousValue);

// HandleSubmit y submitting son metodos nativos del redux form: el primero se ejecuta al hacer onSubmit en el formulario y el segundo deshabilita el boton de enviar, mientras se envia la informacion al servidor.

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded }) =>{
    return(
        <div>
            <h2>Formulario de edicion Cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={myField} 
                    type="text"
                    label="Nombre"
                    parse={toUpper}
                    format={toLower}
                ></Field>
                <Field 
                    name="dni" 
                    component={myField} 
                    type="text"
                    label="DNI"
                ></Field>
                <Field 
                    name="age" 
                    component={myField} 
                    type="number"
                    validate={[minLength, isNumber]}
                    label="Edad"
                    parse={toNumber}
                    normalize={onlyGrow}
                ></Field>    
                <CustomersActions>
                    <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                </CustomersActions>                     
                <Prompt
                    when={!pristine && !submitSucceeded}
                    message="Se perderan los datos si haces clic."
                >
                </Prompt>
            </form>
        </div>  
    );
}
// Con Promt detectamos que el usuario confirme los datos antes de ser enviados


CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    handleOnBack: PropTypes.func
}

// Para enlazar el componente al reducer decoramos con el metodo reduxForm, el cual nos devuelve un objeto con una key llamada form. la cual debemos pasarle el nombre id de nuestro formulario

// Para dejar una validacion global, agregamos en el objeto una propiedad que llame una funcion que valide los campos
const CustomerEditForm = reduxForm({ 
    form: 'CustomerEdit',
    // aqui llama la funcion que cree arriba
    validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);