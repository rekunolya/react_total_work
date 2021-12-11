import {SELECTED_CATEGORY_ACTION} from "./constants";
import { SelectedCategory} from "../../api";
import { Api } from "../../api";
import { useSelector } from "react-redux";
import { SelectedCategorySelectors } from "./index";
import { useParams } from "react-router";

export const getSelectedCategory = () => ({type: SELECTED_CATEGORY_ACTION })

export const getSelectedCategorySuccess = (selectedCategory: SelectedCategory[]) => ({
    type: SELECTED_CATEGORY_ACTION.GET_SELECTED_CATEGORY_SUCCESS,
    payload: selectedCategory
});
export const getSelectedCategoryFailure = () => ({
    type: SELECTED_CATEGORY_ACTION.GET_SELECTED_CATEGORY_FAILURE
})

export const fetchSelectedCategory = () => async (dispatch: any, id:number) => {
    dispatch(getSelectedCategory());
        Api.getSelectedCategory(id) //нужно передать параметр id категории, не знаю, как до него достучаться.
        .then((selectedCategory) => {
            dispatch(getSelectedCategorySuccess(selectedCategory));
        })
        .catch(()=> {
            dispatch(getSelectedCategoryFailure())
        })
   
  
}
