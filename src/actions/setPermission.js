import { createAction } from 'redux-actions';
import { SET_PERMISSIONS } from '../constants';
import { CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT } from '../constants/permissions';

export const setPermission = createAction(SET_PERMISSIONS, data => {
    if(data.levelAccess === 1){
        return CUSTOMER_EDIT;
    }
    if(data.levelAccess === 2){
        return CUSTOMER_VIEW;
    }
    if(data.levelAccess === 3){
        return CUSTOMER_LIST;
    }     
});