import { LOAD_STATUSES } from './constats'

export interface PopularCategories {
    category: {id: number, type: string, label: string},
    items: {id: number, category_type: string, label: string, price: number, img: string}[],
}

export interface State {
    loadStatus: LOAD_STATUSES;
    popularCategories: PopularCategories[]
}