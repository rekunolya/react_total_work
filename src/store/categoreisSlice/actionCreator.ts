import { CATEGORIES_ACTIONS } from "./constants";
import { Categories } from "./type";
import { Api } from '../../api';

export const getCategories = () => ({ type: CATEGORIES_ACTIONS.GET_CATEGORIES});

export const getCategoriesSuccess = (categories: Categories[]) => ({
    type: CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
    payload: categories,
});

export const getCategoriesFailure = () => ({
    type: CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE
})

export const fetchCategories = () => async (dispatch: any) => {
    dispatch(getCategories());
    Api.getCategories()
    .then(({categories}) => {
        dispatch(getCategoriesSuccess(categories));
    })
    .catch(()=>{
        dispatch(getCategoriesFailure());
    });
}