import React, { useEffect } from 'react'
import css from './style.module.css'
import { useParams, useNavigate } from 'react-router';
import {PopularCategoriesSelectors} from '../../store/popularCategoriesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card';
import { ButtonBack } from '../ButtonBack';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { fetchPopularCategories } from '../../store/popularCategoriesSlice';




export function CategoryPage () {
    const categories = useSelector(PopularCategoriesSelectors.getPopularCategories);
    const { type } = useParams();
    const category =  categories.find((el: any) => el.category.type === type);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchPopularCategories());
    }, [dispatch])

     if (!category) {
        return (
            <div>
                <h2 className = {css.text}> Category is not found, <ButtonBack onClick = {() => navigate(-1)} className = {css.button} title = "come back"/>  </h2>
                
            </div>
        )
    }
    
        return (
            <div className = {css.categoryPage}>
        <section>
            <Header/>
            <div className = {css.title}> <h1> {category?.category.label} </h1></div>
            <div className = {css.items}>

            {category?.items.map((item:any) => (
                <Card key={item.id} img={item.img} category_type = {item.category_type} label = {item.label} price = {item.price}/>

           
            ))}
            </div>   
            <Footer  text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>
     
        </section>
        </div>
           
        )
 
}