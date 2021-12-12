import { LOAD_STATUSES } from './constants'

export interface Categories {
    id: string;
    label: string;
    type: string;
}

export interface State {
    loadStatus: LOAD_STATUSES;
    categories: Categories[]
}