// importamos el combine reducer
import { combineReducers } from 'redux';
import { customers } from '../reducers/customers';

export default combineReducers ({
    customers
});