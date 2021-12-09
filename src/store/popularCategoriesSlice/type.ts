import { LOAD_STATUSES } from './constats';
import  {PopularCategories} from "../../api"


export interface State {
    loadStatus: LOAD_STATUSES;
    popularCategories: PopularCategories[]
}