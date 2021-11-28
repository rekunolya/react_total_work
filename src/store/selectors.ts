import { RootState } from './store'

export const getCategories = (state:RootState) => state.categories;

export const getGoodCategories = (state: RootState) => state.goodCategories