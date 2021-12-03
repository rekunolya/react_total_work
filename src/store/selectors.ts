import { RootState } from './store';


export const getGoodCategories = (state: RootState) => state.reducerCategory.goodCategories;

export const getCart = (state: RootState) => state.cart