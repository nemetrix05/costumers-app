// importamos el combine reducer
import { combineReducers } from 'redux';
import { customers } from '../reducers/customers';
// Para trabajar con Redux form, debemos importar el reducer de redux form
import { reducer as reduxForm } from 'redux-form';

export default combineReducers ({
    customers,
    // Se debe poner una key form para que funcione el reducer
    form: reduxForm
});