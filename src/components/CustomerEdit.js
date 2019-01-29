import React from 'react';
import PropTypes from 'prop-types';


const CustomerEdit = ({ name, dni, age }) =>{
    return(
        <div>
            <h2>Formulario de edicion Cliente</h2>
            <div>
                Nombre / : {name} - DNI / : {dni} - Edad / : {age}
            </div>
        </div>
    );
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number
}

export default CustomerEdit;