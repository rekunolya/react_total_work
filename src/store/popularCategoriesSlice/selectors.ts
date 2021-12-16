import { RootState } from "../store";

export const getPopularCategories = (state:RootState) => state.reducerPopularCategories.popularCategories

export const getPopularCategoriesLoadStatus = (state: RootState) => state.reducerPopularCategories.loadStatus