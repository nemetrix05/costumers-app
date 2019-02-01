import { createStore, compose, applyMiddleware } from 'redux';
// importamos los reducers
import reducers from '../reducers';
// con esta libreria manejamos la promesa para traer los datos a la accion y asi pasarlos al state del reducer
import promiseMiddleware from 'redux-promise';

// Con composeEnhancers, conectamos chrome devtools con el store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// son tres parametros que se pasan al store
// 1. reducers
// 2. initial State
// 3. listeners o devtoolss chrome
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)));