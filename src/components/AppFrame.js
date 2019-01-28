import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

// En este componente llamo en las props el contenido de las secciones del app
const AppFrame = ({header, body}) => {
    return(
        <div>
            <div className="app-frame">
                <AppHeader title={header}></AppHeader>
                <div>{body}</div>
                <div>Aplicacion Costumers App</div>
            </div>
        </div>
    );
}

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body:   PropTypes.element.isRequired
};


export default AppFrame;