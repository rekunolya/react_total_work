import React from "react";


interface GoodCategoriesProps {
category: {id: number, type: string, label: string},
items: {id: number, category_type: string, label: string, price: number, img: string}[],
}

export const GoodCategories: React.FC<GoodCategoriesProps> = (category, items)=>{
    return (
        <div>
    
        </div>
    )

}