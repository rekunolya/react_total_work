import { RootState } from './store';


export const getGoodCategories = (state: RootState) => state.reducerSome.goodCategories;

export const getCart = (state: RootState) => state.reducerCart.value