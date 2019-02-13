import React, { Component } from 'react';
import { connect } from 'react-redux';

// Se crea un componente que devuele otro con los permisos del usuario
export const accessControl =  permissionsRequired => WrappepComponent => {
    const SecuredControl = class extends Component{
        render(){
            const { permissions } = this.props.user;
            const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0);
            if (!isAllow ) {
                return (<div style={{color: 'red', fontWeight: 'bold'}}>No tiene permisos para acceder</div>)
            }
            return <WrappepComponent {...this.props} />
        }
    }

    return connect(state => ({ user: state.user }))(SecuredControl);
}