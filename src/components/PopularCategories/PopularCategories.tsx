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
                           <Card id={item.id} categoryTypeId = {item.categoryTypeId} img={item.img} label = {item.label} price = {item.price} description= {item.description}/>

                       ))}
                   </div>

               </section>
           ))}
            </div>
        )
}