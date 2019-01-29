import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {

// Opcion B no usando Link pra redireccionar a una url, por medio de un evento sobre el boton
    handleOnClick = () => {
        const { history } = this.props;
        history.push('/customers');
        // el com, router siempre pasa al componente envocado las funciones history, push como props para modificar el router
    }

    render() {
        return(
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <h3>Pantalla Incial</h3>
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                >
                </AppFrame>
            </div>
        );
    }
}

// Para dotar de las props de route a un componente usamos un decorador withRouter para asignar las props
export default withRouter(HomeContainer);
