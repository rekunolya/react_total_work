import { LOAD_STATUSES } from './constants';
import { Category } from '../../api';

export interface State {
    loadStatus: LOAD_STATUSES;
    selectedCategory: Category[]
}