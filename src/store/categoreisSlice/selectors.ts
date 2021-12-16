import { RootState } from "../store";

export const getCategories = (state:RootState) => state.reducerCategory.categories

export const getCategoriesLoadStatus = (state: RootState) => state.reducerCategory.loadStatus