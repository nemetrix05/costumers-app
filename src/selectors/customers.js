// Importamos la libreria reselect
import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

export const getCustomerByDni = createSelector(
    (state, props) => state.customers.find( c => c.dni === props.dni ),
    // Aqui recibe el resultado de la anterior funcion para devolver los datos al componente
    customer => customer
);