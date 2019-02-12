// para manejar los reducer usamos el metodo handleActions que permite gestionar varias acciones en un reducer
// handleActions: en plural son para varias acciones
import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMERS, UPDATE_CUSTOMERS, DELETE_CUSTOMERS } from '../constants';

// en el reducer como parametros de la funcion va el state anterior y el nuevo action
export const customers = handleActions({
    // Devolvemos la array haciendo un filtro en el cual preguntamos si el id del payload coincide con el nuevo, si no existe actualice la lista con los nuevos valores
    [DELETE_CUSTOMERS]: (state, action) => state.filter(c => c.id !== action.payload),
    // en el resultado de esta funcion pasamos el nuevo state en array que es como lo necesita la vista
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    // Para evitar la carga de FETCH CUSTOMERS: añadimos a la array de respuesta el nuevo usuario que nos viene por POSt
    [INSERT_CUSTOMERS]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMERS]: (state, action) => {
        // Guardo en una constante el resultado de la accion
        const customerPayload = action.payload;
        // Extraigo el id del objeto que se actualizo
        const { id } = customerPayload;
        // Otiene el state viejo
        const customers = state;
        // Valor inicial, quiero que todos los objetos queden en una array de objetos
        const initialValue = [];

        // El metodo reduce itera sonbre los elementos de la array vieja y compara con el nuevo valor.
        // llama dos valores, una funcion de callback con el antes y despues, el valor inicial
        const newCustomers = customers.reduce( (acc, customer) => {
            // Compara entre el valor de id del viejo con el id del nuevo y si coincide los reemplaza si no conserva el antiguo valor
            if(customer.id === id) {
                return [ ...acc, customerPayload ]
            } else {
                return [ ...acc, customer]
            }
        }, initialValue);

        return newCustomers;
    }
}, []);