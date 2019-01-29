import React from 'react';
import PropTypes from 'prop-types';

const CustomersActions = ({ children }) =>{
    return(
        <div>
            <div className="costumers-actions">
                <div>{children}</div>
            </div>
        </div>
    );
}

CustomersActions.propTypes = {
    // Node es un tipo de validacion que permite rendrizar cualquier tipo de elementos.
    children: PropTypes.node.isRequired
};

export default CustomersActions;