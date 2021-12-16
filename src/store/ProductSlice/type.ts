import { LOAD_STATUSES } from "./constants";
import {} from "../../api"

export interface Product {
    id: string;
    label: string;
    category_type: string;   
    price: number; 
    img: string;
}

export interface State {
    loadStatus: LOAD_STATUSES,
    product: Product[]
}