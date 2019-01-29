import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';

// Definimos la array de clientes de la lista
const customers = [
    {
      "dni":    "345345546546",
      "name":   "Andres Cruz",
      "age":    27  
    }
];

class CustomersContainer extends Component {

    // Creo la funcion que va llevar al boton añadir un nuevo usuario
    handleAddNew = () =>{
        const { history } = this.props;
        history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomerList
                customers={customers}
                urlPath={'customers/'}>
            </CustomerList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    render(){
        return(
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

export default withRouter(CustomersContainer);
