import {Action} from "redux";
import {PRODUCT_ACTION, LOAD_STATUSES} from "./constants";
import {State} from "./type";

const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    product: []
};

export const reducer = (
    state = INITIAL_STATE,
    action: Action<PRODUCT_ACTION>
) => {
    switch(action.type) {
        case PRODUCT_ACTION.GET_PRODUCT: {
            return{
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            };
        }

        case PRODUCT_ACTION.GET_PRODUCT_SUCCESS: {
            const {payload} = action as {
                type: PRODUCT_ACTION.GET_PRODUCT_SUCCESS;
                payload: State["product"]
            };
            return {
                product:payload,
                loadStatus: LOAD_STATUSES.LOADED
            };
        }
        case PRODUCT_ACTION.GET_PRODUCT_FAILURE: {
            return{
                ...state,
                loadStatus: LOAD_STATUSES.ERROR
            };
        }
        default:
            return state;
    }
}