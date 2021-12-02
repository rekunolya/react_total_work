import { RootState } from './store'

export const getCategories = (state:RootState) => state.reducerCategory.categories;

export const getGoodCategories = (state: RootState) => state.reducerCategory.goodCategories;

export const getCart = (state: RootState) => state.reducerCart