import React from 'react'
import css from './style.module.css'
import { useParams, useNavigate } from 'react-router'
import { Selectors } from "../../store"
import { useSelector } from 'react-redux';
import { Card } from '../Card';
import { ButtonBack } from '../ButtonBack';




export function CategoryPage () {
    const categories = useSelector(Selectors.getGoodCategories);
    const { type } = useParams();
    const category =  categories.find(el => el.category.type === type);
    const navigate = useNavigate();

    if (!category) {
        return (
            <div>
                <h2 className = {css.text}> Category is not found, <ButtonBack onClick = {() => navigate(-1)} className = {css.button} title = "come back"/>  </h2>
                
            </div>
        )
    }

  
        return (
            <div>
        <section>
            <div className = {css.title}> <h1> {category?.category.label} </h1></div>
            <div className = {css.items}>
            {category?.items.map((item) => (
                <Card id={item.id} img={item.img} category_type = {item.category_type} label = {item.label} price = {item.price}/>
            ))}
            </div>        
        </section>
        </div>
           
        )
 
}