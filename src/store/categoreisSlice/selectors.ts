import { RootState } from "../store";

export const getCategories = (state:RootState) => state.category.categories;

export const getCategoriesLoadStatus = (state: RootState) => state.category.loadStatus;