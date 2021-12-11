import { LOAD_STATUSES } from './constants';
import { SelectedCategory } from '../../api';

export interface State {
    loadStatus: LOAD_STATUSES;
    selectedCategory: SelectedCategory[]
}