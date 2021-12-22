export type Product = {
    categoryTypeId: string; 
    description: string;
    id: string;
    img: string;
    label: string; 
    price: number; 
    
}

export type Cart = {
    carts : Product[]
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
    category: Category[],
    items: Product[],
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

    static getSelectedCategory(id: string): Promise<{categories:Category[]}> {
        return fetch(`/api/categories?ids=${id}`).then(r => {
            if(r.ok) {
               return r.json()
            }
        })
    }

    static getProductsSelectedCategory( id: string): Promise<{items: Product[]}> {
        return fetch(`/api/goods?categoryTypeIds=${id}`).then(r => {
            if(r.ok) {
                return r.json()
            }
        })
    }
    

    static getProduct(id: string): Promise<{items: Product[]; total: number}> {
        return fetch(`/api/goods?ids=${id}`).then(r => {
            if(r.ok) {
                
                return r.json()
            }
        })
    }
    static getCart(): Promise<Cart> {
        return fetch('/api/cart')
        .then(r => {
            if(r.ok) {
                return r.json()
            }
        })
    }

    static statusCart(product: Product, method: string) : Promise<Response>{
        return fetch('/api/cart', {
            method: method,
            headers: {},
            body: JSON.stringify(product),
        });
    }
}