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

class CustomerContainer extends Component {

    // Creamos una funcion  para renderizar el contenido del cliente, con el componente Router es como un if y le pasamos como children el parametro que se convierte en true , si la ruta coincide

    renderBody = () => (
        <Route
            path="/customers/:dni/edit" children={
                // Creamos una funcion para condicionar lo que se mostrara
                // Con el spread operator {...this.props.customer} enviamos todas las props que necesitan los componentes, en lugar de pasarlas uno por uno asi: this.props.customer.name ...
                ( { match } ) => { 
                    // Para no repetir los mismos valores, realizo un control component, guardando en una constante el nombre el comp y cambiendo su valor de acuerdo al match
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl {...this.props.customer} />
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
    customer: PropTypes.object.isRequired
}

// Esta funcion puede recibir props en adicion al state
const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});


export default withRouter(connect(mapStateToProps, null)(CustomerContainer));
