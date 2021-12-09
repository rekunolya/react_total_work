

interface Good {
    id: number;
    label: string;
    category_type: string;   
    price: number; 
    img: string;
}
 interface Category {
     id: number;
     label: string;
     type: string;

 }

export type PopularCategories = {
     category: Category,
     items: Good[], 
 }

 interface Cart {
     value: number;
 }

export class Api {
    getGoods(): Promise<{ items: Good[]; total: number }> {
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

    getCart(): Promise<{value: Cart[]; total: number}> {
        return fetch('/api/cart').then(r => {
            if (r.ok) {
                return r.json()
            }
        })
    }
}