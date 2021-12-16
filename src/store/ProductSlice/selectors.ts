import { stat } from "fs";
import { RootState } from "../store";

export const getProduct = (state: RootState) => state.reducerProduct.product;

export const getProductLoadStatus = (state: RootState) => state.reducerProduct.loadStatus;