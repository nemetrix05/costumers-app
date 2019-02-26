import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import { withRouter } from 'react-router-dom';
import CustomerLogin from '../components/CustomerLogin';
import { connect } from 'react-redux';
import { setPermission } from '../actions/setPermission';
import { CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT } from '../constants/permissions';

class HomeContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: null
        }
        this.msnValidate = this.msnValidate.bind(this);
    }

    handleOnSubmitSuccess = () => {
        const { history, userAcess } = this.props;
        switch(userAcess.permissions){

            case CUSTOMER_LIST: {
                return history.push('/customers');
            }

            case CUSTOMER_VIEW: {
                return history.push('/customers');
            }      
            
            case CUSTOMER_EDIT: {
                return history.push('/customers/new');
            }                  

            default:
            return history.push('/');  
        }

    }

    msnValidate = user => {

        const { setPermission } = this.props;
        

        if(!user || user === undefined){
            this.setState({
                message: 'El usuario No existe'
            })
        } else {
            this.setState({
                message: 'El usuario EXISTE!!!!'
            });
            // Send the accion with the user active
            setPermission(user);
        }
    }

    // con esta funcion se obtienen los datos enviados desde el customer Edit
    handleSubmit = values => {
        const { group } = this.props;
        const userSend = values.user;
        const passSend = values.password;

        console.log(group);
        console.log(passSend);
        //const matchUser = group.find(c => c.user === userSend || c.password === PassSend );

        const matchUser = group.find(function(c){
            if(c.user === userSend && c.password === passSend) {
                return c.user === userSend;
            }
            return undefined;
            
        });

        this.msnValidate(matchUser);
        
    }

    render() {
        const { message } = this.state;
        
        return(
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <CustomerLogin 
                                onSubmit={this.handleSubmit}
                                alert={message}
                                onSubmitSuccess={this.handleOnSubmitSuccess}
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
    group:      state.group,
    userAcess:  state.user
});

// Para dotar de las props de route a un componente usamos un decorador withRouter para asignar las props
export default withRouter(connect(mapStateToProps, { setPermission })(HomeContainer));
