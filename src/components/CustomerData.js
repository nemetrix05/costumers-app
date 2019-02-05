import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({ name, dni, age }) =>{
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
        </div>
    );
}


CustomerData.propTypes = {
    name:   PropTypes.string,
    dni:    PropTypes.string,
    age:    PropTypes.number    
}

export default CustomerData;