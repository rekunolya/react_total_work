import { CATEGORIES_ACTIONS } from "./constants";
import { Categories } from "./type";

export const getCategories = () => ({ type: CATEGORIES_ACTIONS.GET_CATEGORIES});

export const getCategoriesSuccess = (categories: Categories[]) => ({
    type: CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
    payload: categories
});
export const getCategoriesFailure = () => ({
    type: CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE
})


export const fetchCategories = () => async (dispatch: any) => {
    dispatch(getCategories());
    fetch('/api/categories')
    .then((resp) => {
        if (resp.ok) {
            return resp.json();
        }
        
        throw new Error ('somithing is wrong');

    })
    .then(({categories}) => {
        dispatch(getCategoriesSuccess(categories));
    })
    .catch(()=>{
        dispatch(getCategoriesFailure());
    });
}