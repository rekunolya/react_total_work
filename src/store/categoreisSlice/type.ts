import { LOAD_STATUSES } from './constants'

export interface Categories {
    id: number;
    label: string;
    title: string;
}

export interface State {
    loadStatus: LOAD_STATUSES;
    categories: Categories[]
}