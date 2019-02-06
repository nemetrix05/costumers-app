import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({ name, dni, age, onBack }) =>{
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
            </CustomersActions>                 
        </div>
    );
}


CustomerData.propTypes = {
    name:   PropTypes.string,
    dni:    PropTypes.string,
    age:    PropTypes.string,
    onBack: PropTypes.func    
}

export default CustomerData;