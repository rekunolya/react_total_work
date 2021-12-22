import { Action } from "redux";
import { CART_ACTIONS, LOAD_STATUSES } from "./constants";
import {State} from './type'

const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    carts: null
}

export const reducer = (
    state = INITIAL_STATE,
    action: Action<CART_ACTIONS>
) => {
    switch(action.type) {
        case CART_ACTIONS.SET_CART: {
            return {
                ...state,
              loadStatus: LOAD_STATUSES.LOADING
            }
        }

        case CART_ACTIONS.SET_CART_SUCCESS: {
            const {payload} = action as {
                type: CART_ACTIONS.SET_CART_SUCCESS;
                payload: State['carts'];
            }
            return {
                carts: payload,
                loadStatus: LOAD_STATUSES.LOADED
            };
        }
        case CART_ACTIONS.SET_CART_FAILURE: {
            return {
                ...state,
                loadStatus: LOAD_STATUSES.ERROR
            };
        }
        default: 
        return state;
    }
};