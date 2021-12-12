interface Product {
    id: string;
    label: string;
    category_type: string;   
    price: number; 
    img: string;
}
 export type Category = {
     id: string;
     label: string;
     type: string;
 }

export type PopularCategories = {
     category: Category,
     items: Product[], 
 }

export type SelectedCategory = {
    category: Category,
    items: Product[],
}

 interface Cart {
     value: number;
 }

export class Api {
    getGoods(): Promise<{ items: Product[]; total: number }> {
        return fetch('/api/goods').then(r => {
            if (r.ok) {
                return r.json()
            }
        });
    }

   static getCategories(): Promise<{categories: Category[]}> {
        return fetch('/api/categories').then(r => {
            if (r.ok) {
                return r.json()
            }
        })
    }

   static getPopularCategories(): Promise<PopularCategories[]> {
        return fetch('api/popular_categories').then(r => {
            if(r.ok) {
                return r.json()
            }
        })
    }

    static getSelectedCategory(id: string): Promise<SelectedCategory> {
        return fetch(`/api/categories?ids=${id}`).then(r => {
            if(r.ok) {
                return r.json()
            }
        })
    }

    static getProduct(id: string): Promise<{product: Product[]}> {
        return fetch(`/api/goods?ids=${id}`).then(r => {
            if(r.ok) {
                return r.json()
            }
        })
    }

    getCart(): Promise<{value: Cart[]; total: number}> {
        return fetch('/api/cart').then(r => {
            if (r.ok) {
                return r.json()
            }
        })
    }
}