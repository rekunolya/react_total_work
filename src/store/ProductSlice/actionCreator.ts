import {PRODUCT_ACTION}  from "./constants";
import {Product} from "./type";
import { Api } from "../../api";

export const getProduct = () => ({type: PRODUCT_ACTION.GET_PRODUCT});

export const getProductSuccess = (product: Product[]) => ({
 type: PRODUCT_ACTION.GET_PRODUCT_SUCCESS,
 payload: product
}); 
export const getProductFailure = () => ({
    type: PRODUCT_ACTION.GET_PRODUCT_FAILURE
})

export const fetchProduct = () => async (dispatch: any, id: string) => {
    dispatch(getProduct());
    Api.getProduct(id)
    .then(({product}) => {
        dispatch(getProductSuccess(product));
    })
    .catch(() => {
        dispatch(getProductFailure())
    });
}