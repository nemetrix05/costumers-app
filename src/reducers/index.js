// importamos el combine reducer
import { combineReducers } from 'redux';
import { customers } from '../reducers/customers';
// Para trabajar con Redux form, debemos importar el reducer de redux form
import { reducer as reduxForm } from 'redux-form';
import { SET_PERMISSIONS } from '../constants';


// Creamos el reducer para mostrar llos componentes de acuerdo al tipo de usuario
const user = (state = {}, action) => {
    switch(action.type) {

        case SET_PERMISSIONS: {
            return { permissions: [action.payload] }
        }

        default:
            return state;        
    }
}

// Grupo de usuarios 
const group = (state, action) => ([
    {
        user:           'admin1',
        password:       '123',
        levelAccess:    1
    },
    {
        user:           'admin2',
        password:       '1234',
        levelAccess:    2
    },
    {
        user:           'admin3',
        password:       '12345',
        levelAccess:    3
    }           
]);

export default combineReducers ({
    customers,
    group,
    // Se debe poner una key form para que funcione el reducer
    form: reduxForm,
    user
});