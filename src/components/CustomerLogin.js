import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import CustomersActions from './CustomersActions';


const validate = values => {

    const error = {}

    if (!values.user) {
        error.user = "*El usuario es requerido"
    } 
    if (!values.password) {
        error.password = "*La contraseña es requerida"
    }
    return error;
}

class CustomerLogin extends Component {    

    renderInput = ({ input, name, label, type, meta }) => {
        return <div>
                    <label htmlFor={name}>{label}</label>
                    <input
                        {...input}
                        type={ !type ? "text" : type }
                    />
                    { meta.touched && meta.error && <span className="required">{meta.error}</span> }
                </div>
    }

    render(){
        const { handleSubmit, pristine, submitting, alert } = this.props;
        return (
            <div>
                <h3>Iniciar Sesion</h3>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="user"
                        label="Usuario"
                        type="text"
                        component={this.renderInput}
                    >
                    </Field>
                    <Field
                        name="password"
                        label="Contraseña"
                        type="password"
                        component={this.renderInput}
                    >
                    </Field>    
                    {alert}
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>Ingresar</button>
                    </CustomersActions>                                
                    
                </form>
            </div>
        )
    }
}

CustomerLogin.propTypes = {
    handleSubmit:   PropTypes.func,
    alert:          PropTypes.string
}

export default reduxForm({ 
    form: 'LoginForm',
    validate
})(CustomerLogin);