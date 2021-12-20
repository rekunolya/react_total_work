import {CART_ACTIONS} from './constants'


export const getCart = () => ({type: CART_ACTIONS.GET_CART})

export const getAddToCart = () => ({
    type: CART_ACTIONS.GET_ADD_TO_CART
})

export const getDeleteFromCart = () => ({
    type: CART_ACTIONS.GET_DELETE_FROM_CART
})

//export const addToCart = () => async () => {
 //   Api.
//}