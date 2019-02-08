import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { insertCustomer } from '../actions/insertCustomer';
import { SubmissionError } from 'redux-form';

class NewCustomerContainer extends Component {

    handleOnBack = () => { this.props.history.goBack(); }    
    
    handleOnSubmitSuccess = () => { this.props.history.goBack(); }

    handleSubmit = ( values ) => {
        return this.props.insertCustomer(values)
        .then( r => r )
        .catch(e => {
            if (e.error){
                // se lanza un error con el metodo Submition Error de redux que traera el error en la consulta
                throw new SubmissionError(e.payload);
            }
        })
    }

    renderBody = () => {
        return <CustomerEdit 
                onSubmit={this.handleSubmit} 
                onBack={this.handleOnBack} 
                onSubmitSuccess={this.handleOnSubmitSuccess} />
    }    

    render(){
        return(
            <div className="new-customer">
                <AppFrame
                    header="Nuevo Cliente"
                    body={this.renderBody()}
                >
                </AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired
}

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));