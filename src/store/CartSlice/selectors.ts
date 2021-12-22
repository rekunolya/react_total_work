import { RootState } from "../store";

export const getCart = (state: RootState) => state.reducerCart.carts;

export const getCartLoadStatus = (state: RootState) => state.reducerCart.loadStatus