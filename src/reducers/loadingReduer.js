import {NOTES_STATUS, USER_STATUS} from '../actionTypes';

export function loadingReducer(state={}, action){
    switch(action.type){
        case NOTES_STATUS:
            return {...state,notes: action.payload};
        case USER_STATUS:
            return {...state, user: action.payload};
        default:
            return state;
    }
}