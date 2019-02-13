import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
// Importo el HOC para validar accesos al componente
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_LIST } from '../constants/permissions';

// Enviamos a la tabla de usuarios una array con los campos de cada uno
const CustomerList = ({ customers, urlPath }) => {
    return(
        <div>
            <div className="costumer-list">
                {
                    customers.map( c => 
                        <CustomerListItem
                            key={c.dni}
                            name={c.name}
                            dni={c.dni}
                            editAction="Editar"
                            delAction="Borrar"
                            urlPath={urlPath}
                        >
                        </CustomerListItem>
                    )
                }
            </div>
        </div>
    );
}

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
}

export default accessControl([CUSTOMER_LIST])(CustomerList);