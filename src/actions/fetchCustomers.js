// Importamos el action creator, que nos ayuda a simplificar las acciones del store
import { createAction } from 'redux-actions';
// aqui importamos las constantes de las acciones
import { FETCH_CUSTOMERS } from '../constants';
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';

// Podemos validar las acciones sin usar el store con breakpoints con debugger

/*export const fetchCustomers = () => {
    debugger;
    return { type: 'FETCH_CUSTOMERS', payload: null }
};*/

/*Api usamos una herramienta https://github.com/typicode/json-server llamada json server que nos proveera de un servicio REST en un archivo generado por nosotros
Lo instalamos y ejecutamos el comando: $ json-server --watch db.json --port 3004
*/

// con payload creator le pasamos el valor de la accion que serian los datos en array, va como segundo parametro en createActions
// Modo clasico
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));
