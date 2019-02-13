// importamos el combine reducer
import { combineReducers } from 'redux';
import { customers } from '../reducers/customers';
// Para trabajar con Redux form, debemos importar el reducer de redux form
import { reducer as reduxForm } from 'redux-form';
// Importamos los permisos para cada usuario
import { CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT } from '../constants/permissions';


// Creamos el reducer para mostrar llos componentes de acuerdo al tipo de usuario
const user = (state, action) => (
    {
        permissions: []  
    }
);


export default combineReducers ({
    customers,
    // Se debe poner una key form para que funcione el reducer
    form: reduxForm,
    user
});