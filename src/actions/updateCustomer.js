import { createAction } from 'redux-actions';
import { UPDATE_CUSTOMERS } from '../constants';
import { apiPut } from '../api';
import { urlCustomers } from '../api/urls';

// Aqui ejecutamos la accion para hacer el put en el servidor enviando los parametros a la consulta
export const updateCustomer = createAction(UPDATE_CUSTOMERS, (id, customer) => apiPut(urlCustomers, id, customer)());