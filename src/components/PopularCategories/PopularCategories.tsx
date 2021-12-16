import React, { useEffect } from 'react'
import css from './style.module.css'
import {PopularCategoriesSelectors} from '../../store/popularCategoriesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card';
import { fetchPopularCategories } from '../../store/popularCategoriesSlice';

export const PopularCategories:React.FC  =  () => {
    const categories = useSelector(PopularCategoriesSelectors.getPopularCategories);
    const category =  categories
    const dispatch = useDispatch();
        
    useEffect (() => {
       dispatch(fetchPopularCategories());
    }, [dispatch])

        return (
        <div>
           {category.map((cat) => (
               <section className = {css.popularCategories}>
                   <h3 className = {css.title}>{cat.category.label}</h3>
                   <div className = {css.cards}> 
                       {cat.items.map((item) => (
                           <Card key={item.id} img={item.img} category_type = {item.category_type} label = {item.label} price = {item.price}/>

                       ))}
                   </div>

               </section>
           ))}
            </div>
        )
}