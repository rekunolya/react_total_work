import {SELECTED_CATEGORY_ACTION} from "./constants";
import { SelectedCategory} from "../../api";
import { Api } from "../../api";

export const getSelectedCategory = () => ({type: SELECTED_CATEGORY_ACTION })

export const getSelectedCategorySuccess = (selectedCategory: SelectedCategory) => ({
    type: SELECTED_CATEGORY_ACTION.GET_SELECTED_CATEGORY_SUCCESS,
    payload: selectedCategory
});
export const getSelectedCategoryFailure = () => ({
    type: SELECTED_CATEGORY_ACTION.GET_SELECTED_CATEGORY_FAILURE
})

export const fetchSelectedCategory = (id:any) => async (dispatch: any) => {
    dispatch(getSelectedCategory());
    Promise.all([Api.getSelectedCategory(id), Api.getProductsSelectedCategory(id)])
    .then((result) => {
        console.log('selectedCategory', result)
        var a: SelectedCategory = {
            category : result[0].categories,
            items : result[1].items
        }; 
    
        dispatch(getSelectedCategorySuccess(a));
    }).catch(() => {
        dispatch(getSelectedCategoryFailure())
    })
 
}
