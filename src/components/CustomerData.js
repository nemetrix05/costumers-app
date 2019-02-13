import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';
// Importo el HOC para validar accesos al componente
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_VIEW } from '../constants/permissions';

// Para activar la eliminacion de un usuario, debemos agregar como prop 2 valores permitir borrar que es un boleano y una funcion que envocara la accion de borrar en el componente contenedor.
// Para pasar en una funcion un parametro usamos una arrow function

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) =>{
    return(
        <div>
            <div className="costumer-data">
                <h2>Datos del Cliente</h2>
                <ul>
                    <li><strong>Name:</strong>{name}</li>
                    <li><strong>DNI:</strong>{dni}</li>
                    <li><strong>Edad:</strong>{age}</li>
                </ul>
            </div>
            <CustomersActions>
                <button type="button" onClick={onBack}>Volver</button>
                {isDeleteAllow && <button onClick={() => onDelete(id)}>Eliminar</button>}
            </CustomersActions>                 
        </div>
    );
}


CustomerData.propTypes = {
    id:             PropTypes.string,
    name:           PropTypes.string,
    dni:            PropTypes.string,
    age:            PropTypes.string,
    onBack:         PropTypes.func,
    isDeleteAllow:  PropTypes.bool,
    onDelete:       PropTypes.func

}

export default accessControl([CUSTOMER_VIEW])(CustomerData);