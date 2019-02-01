import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';


class CustomersContainer extends Component {

    componentDidMount () {
        this.props.fetchCustomers();
    }

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
        const { customers } = this.props;
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

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers:      PropTypes.array.isRequired
}

// Definimos los datos de los usuarios en lugar de que sea una funcion
CustomersContainer.defaultProps = {
    customers: []    
};

// Nos conectamos a los datos del state con mapStateToProps

const mapStateToProps = state => ({
    customers: getCustomers(state)
});


// Con action creator, se puede simplificar mejor el llamado a la accion, se le pasa directamente al connect
export default withRouter( connect(mapStateToProps, { fetchCustomers })(CustomersContainer));
