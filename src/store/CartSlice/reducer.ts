import { Action } from "redux";
import {State} from './type'
import { CART_ACTIONS } from "./constants";

const INITIAL_STATE = {
    value: 0
}

export const reducer = (
    state = INITIAL_STATE,
    action: Action<CART_ACTIONS>
) => {
    switch(action.type) {
        case CART_ACTIONS.GET_ADD_TO_CART: {
            return {
                ...state,
                value: state.value + 1,
            }
        }

        case CART_ACTIONS.GET_DELETE_FROM_CART: {
            return {
                ...state,
                value: state.value - 1,
            }
        }
        default: 
        return state;
    }
}