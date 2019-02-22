import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import { withRouter } from 'react-router-dom';
import CustomerLogin from '../components/CustomerLogin';
import { connect } from 'react-redux';
// Importamos los permisos para cada usuario
import { CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT } from '../constants/permissions';

class HomeContainer extends Component {

    componentDidMount () {
        const { group } = this.props;
        console.log(group);
    }

    // con esta funcion se obtienen los datos enviados desde el customer Edit
    handleSubmit = values => {
        console.log('datos enviados!!!');
        console.log(values);
    }

    render() {
        return(
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <CustomerLogin 
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    }
                >
                </AppFrame>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    group: state.group
});

// Para dotar de las props de route a un componente usamos un decorador withRouter para asignar las props
export default withRouter(connect(mapStateToProps)(HomeContainer));
