import {Product} from '../../api'
import { LOAD_STATUSES } from './constants';


export interface State {
    loadStatus: LOAD_STATUSES,
    carts: Product[] | null
}
