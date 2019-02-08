import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
// Componentes para pantalla usuario
import CustomerData from '../components/CustomerData';
import CustomerEdit from '../components/CustomerEdit';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';
// Importamos el metodo SubmissionError de redux form
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {


    // Aqui hacemos de nuevo el dispatch al fetch que llamara la accion de fetch de los datos
    componentDidMount () {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    // Con esta funcion hacemos que el boton vuelva atras
    handleOnBack = () => {
        this.props.history.goBack();
    }

    // Con esta funcion volvemos a la vista de usuarios al llenar el form
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    // con esta funcion se obtienen los datos enviados desde el customer Edit
    handleSubmit = values => {
        console.log(JSON.stringify(values));
        // extrae de la array del cliente solo el ID
        const { id } = values;
        // Con el return enviamos la promesa al boton de enviar,con el objetivo que se deshabilite al enviar la informacion
        return this.props.updateCustomer(id, values)
            .then( r => r )
            .catch(e => {
                if (e.error){
                    // se lanza un error con el metodo Submition Error de redux que traera el error en la consulta
                    throw new SubmissionError(e.payload);
                }
            });
        // Aqui ejecutamos la promise desde lado del servidor
    }

    // Creamos una funcion  para renderizar el contenido del cliente, con el componente Router es como un if y le pasamos como children el parametro que se convierte en true , si la ruta coincide

    renderBody = () => (

        <Route
            path="/customers/:dni/edit" children={
                // Creamos una funcion para condicionar lo que se mostrara
                // Con el spread operator {...this.props.customer} enviamos todas las props que necesitan los componentes, en lugar de pasarlas uno por uno asi: this.props.customer.name ...
                ( { match } ) => { 
                    // Para no repetir los mismos valores, realizo un control component, guardando en una constante el nombre el comp y cambiendo su valor de acuerdo al match
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl {...this.props.customer} 
                            onSubmit={this.handleSubmit}
                            //con esta propiedad ejecutamos la redireccion al enviar el formulario
                            onSubmitSuccess={this.handleOnSubmitSuccess}
                            onBack={this.handleOnBack} />
                    // Foma 2 de definir valores iniciales en los campos del formulario
                    //return <CustomerControl initialValue={this.props.customer} />
                }
            }
        >
        </Route>
    )

    render(){
        const { dni } = this.props;
        return(
            <AppFrame
                header={`Cliente ${dni}`}
                body={this.renderBody()} >
            </AppFrame>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired
}

// Esta funcion puede recibir props en adicion al state
const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});


export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer })(CustomerContainer));
