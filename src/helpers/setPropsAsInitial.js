// Hight order component: Son funciones que reciben como parametros las props que le pasamos y devuelven un nuevo componente con las props.

import React, { Component } from 'react';

// Para que conserve el compo los valores anteriores se usa una propiedad nueva llamada enableReinitialize que fuerza al componente a iniciar los datos

// Initial values solo se ejecuta una vez

export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render(){
            return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize />;
        }
    }
);