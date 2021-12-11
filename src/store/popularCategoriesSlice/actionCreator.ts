import {POPULAR_CATEGORIES_ACTIONS} from "./constats";
import  {PopularCategories} from "../../api";
import { Api } from "../../api";

export const getPopularCategories = () => ({type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES});

export const getPopularCategoriesSuccess = (popularCategories: PopularCategories[]) => ({
    type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_SUCCESS,
    payload: popularCategories
});
export const getPopularCategoriesFailure = () => ({
    type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_FAILURE
})


export const fetchPopularCategories = () => async (dispatch: any) => {
    dispatch(getPopularCategories());
    Api.getPopularCategories()
    .then((result) => {
       dispatch(getPopularCategoriesSuccess(result));
    })
    .catch(() => {
        dispatch(getPopularCategoriesFailure());
    });
}