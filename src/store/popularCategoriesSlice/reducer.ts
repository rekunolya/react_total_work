import { Action } from "redux";
import {POPULAR_CATEGORIES_ACTIONS, LOAD_STATUSES} from "./constats";
import { State } from "./type";

const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    popularCategories: []
};

export  const reducer = (
    state = INITIAL_STATE,
    action: Action<POPULAR_CATEGORIES_ACTIONS>
) => {
    switch(action.type) {
        case POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES: {
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            };
        }

        case POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_SUCCESS: {
            const { payload } = action as {
                type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_SUCCESS;
                payload: State["popularCategories"];
            };
            return {
                popularCategories: payload,
                loadStatus: LOAD_STATUSES.LOADED
            };
        }
        case POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_FAILURE: {
            return {
                ...state,
                loadStatus: LOAD_STATUSES.ERROR
            };
        }
        default: 
        return state;
    }
};