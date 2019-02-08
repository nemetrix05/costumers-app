import { createAction } from 'redux-actions';
import { INSERT_CUSTOMERS } from '../constants';
import { apiPost } from '../api';
import { urlCustomers } from '../api/urls';

// Aqui ejecutamos la accion para hacer el put en el servidor enviando los parametros a la consulta
export const insertCustomer = createAction(INSERT_CUSTOMERS, customer => apiPost(urlCustomers, customer)());