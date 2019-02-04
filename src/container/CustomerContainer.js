import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCustomerByDni } from '../selectors/customers';

class CustomerContainer extends Component {

    render(){
        const { dni, customer } = this.props;
        return(
            <AppFrame
                header={`Cliente ${dni}`}
                body={<p>Datos del cliente: {customer.name}</p>} >
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
