import {CART_ACTIONS, BUTTON_TEXT} from './constants';
import {Product} from '../../api';
import { Api } from '../../api';

export const setCart = () => ({type: CART_ACTIONS.SET_CART});

export const setCartSuccess = (carts: Product[]) => ({
    type: CART_ACTIONS.SET_CART_SUCCESS,
    payload: carts,
})

export const setCartFailure = () => ({
    type: CART_ACTIONS.SET_CART_FAILURE
});

export const fetchCart = () => async (dispatch: any) => {
   dispatch(setCart());
   Api.getCart()
   .then((res) => {
       dispatch(setCartSuccess(res.carts));
   })
   .catch(() => {
       dispatch(setCartFailure())
   });
}

export const statusCart = (product: Product, status: string) => async (dispatch: any) => {
    let method ="";
    if(status === BUTTON_TEXT.DELETE_FROM_CART){
        method = "delete";
    } else {
        method = "put";
    }

    dispatch(setCart());
    Api.statusCart(product, method)
    .then(r => {
        if(r.ok) {
            dispatch(fetchCart())
        }
    })
    .catch(() => {
        dispatch(setCartFailure())
    })
}