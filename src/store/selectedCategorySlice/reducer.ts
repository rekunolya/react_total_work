import { Action } from "redux";
import { SELECTED_CATEGORY_ACTION, LOAD_STATUSES } from "./constants";
import { State} from "./type";

const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    selectedCategory: []
};

export const reducer = (
    state = INITIAL_STATE,
    action: Action<SELECTED_CATEGORY_ACTION>
) => {
    switch(action.type) {
        case SELECTED_CATEGORY_ACTION.GET_SELECTED_CATEGORY: {
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            };
        }

        case SELECTED_CATEGORY_ACTION.GET_SELECTED_CATEGORY_SUCCESS: {
            const { payload } = action as {
                type: SELECTED_CATEGORY_ACTION.GET_SELECTED_CATEGORY_SUCCESS;
                payload: State["selectedCategory"]
            };
            return {
                selectedCategory: payload,
                loadStatus: LOAD_STATUSES.LOADED
            };
        }
        default:
            return state;
    }
};
