import { LOAD_STATUSES } from "./constants";
import {Product} from "../../api"

export interface State {
    loadStatus: LOAD_STATUSES,
    product: Product[]|null
}