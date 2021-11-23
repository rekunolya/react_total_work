import React from 'react'
import css from './style.module.css'
import { useParams } from 'react-router'
import { Selectors } from "../store"
import { useSelector } from 'react-redux';


export function CategoryPage () {
    const categories = useSelector(Selectors.getCategories);
    //const goodCategories = useSelector(Selectors.getGoodCategories) ;
    const { type } = useParams();
    //const {} = useParams();
    const category =  categories.find(el => el.type === type);

  
        return (
            <div>
        <section>
            <div className = {css.title}> <h1> {category?.label} </h1></div>
          some text
                    
        </section>
        </div>
           
        )
 
}