import {PRODUCT_ACTION}  from "./constants";
import {Product} from "../../api";
import { Api } from "../../api";

export const getProduct = () => ({type: PRODUCT_ACTION});

export const getProductSuccess = (product: Product[]) => ({
 type: PRODUCT_ACTION.GET_PRODUCT_SUCCESS,
 payload: product
}); 
export const getProductFailure = () => ({
    type: PRODUCT_ACTION.GET_PRODUCT_FAILURE
})

export const fetchProduct = (id: any) => async (dispatch: any) => {
    dispatch(getProduct());
    Api.getProduct(id)
    .then((result) => {
        console.log("res ", result)
        dispatch(getProductSuccess(result.items));
    })
    .catch(() => {
        dispatch(getProductFailure())
    });
}