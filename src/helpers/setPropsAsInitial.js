// Hight order component: Son funciones que reciben como parametros las props que le pasamos y devuelven un nuevo componente con las props.

import React, { Component } from 'react';

export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render(){
            return <WrappedComponent {...this.props} initialValues={this.props} />;
        }
    }
);