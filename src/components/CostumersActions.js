import React from 'react';
import PropTypes from 'prop-types';

const CostumersActions = ({ children }) =>{
    return(
        <div>
            <div className="costumers-actions">
                <button type="button">{children}</button>
            </div>
        </div>
    );
}

CostumersActions.propTypes = {
    // Node es un tipo de validacion que permite rendrizar cualquier tipo de elementos.
    children: PropTypes.node.isRequired
};

export default CostumersActions;