// para manejar los reducer usamos el metodo handleActions que permite gestionar varias acciones en un reducer
// handleActions: en plural son para varias acciones
import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

// en el reducer como parametros de la funcion va el state anterior y el nuevo action
export const customers = handleActions({
    // en el resultado de esta funcion pasamos el nuevo state en array que es como lo necesita la vista
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload]
}, []);