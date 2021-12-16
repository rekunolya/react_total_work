import { LOAD_STATUSES } from './constants';
import {SelectedCategory} from '../../api';

export type State = {
    loadStatus: LOAD_STATUSES;
    selectedCategory: SelectedCategory;

}