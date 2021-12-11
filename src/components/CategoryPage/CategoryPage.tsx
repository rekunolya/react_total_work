import React, { useEffect } from 'react'
import css from './style.module.css'
import { useParams, useNavigate } from 'react-router';
//import {PopularCategoriesSelectors} from '../../store/popularCategoriesSlice';
import { SelectedCategorySelectors } from '../../store/selectedCategorySlice';
import { useSelector, useDispatch } from 'react-redux';
//import { Selectors } from "../../store"
import { Card } from '../Card';
import { ButtonBack } from '../ButtonBack';
import { Header } from '../Header';
import { Footer } from '../Footer';
//import { fetchPopularCategories } from '../../store/popularCategoriesSlice';
import { fetchSelectedCategory } from '../../store/selectedCategorySlice';




export function CategoryPage () {
    //const categories = useSelector(Selectors.getGoodCategories)
    const categories = useSelector(SelectedCategorySelectors.getSelectedCategory)
   // const categories = useSelector(PopularCategoriesSelectors.getPopularCategories);
    console.log ("категория", categories)
    const { type } = useParams();
    console.log ("type", type);
    const category =  categories.find((el) => el.category.type === type);
    console.log("category", category);
    const navigate = useNavigate();
    const dispatch = useDispatch()
     
    useEffect (() => {
       dispatch(fetchSelectedCategory());
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