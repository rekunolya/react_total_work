import { RootState } from "../store";

export const getSelectedCategory = (state: RootState) => state.reducerSelectedCategory.selectedCategory;

export const getSelectedCategoryLoadStatus = (state: RootState) => state.reducerSelectedCategory.loadStatus;