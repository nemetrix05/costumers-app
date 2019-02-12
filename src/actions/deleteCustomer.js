import { createAction } from 'redux-actions';
import { DELETE_CUSTOMERS } from '../constants';
import { apiDelete } from '../api';
import { urlCustomers } from '../api/urls';

// Aqui ejecutamos la accion para hacer el put en el servidor enviando los parametros a la consulta
export const deleteCustomer = createAction(DELETE_CUSTOMERS, id => apiDelete(urlCustomers, id)());