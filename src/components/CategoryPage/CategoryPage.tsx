import React, { useEffect } from 'react'
import css from './style.module.css'
import { useParams, useNavigate } from 'react-router';
import { SelectedCategorySelectors } from '../../store/selectedCategorySlice';
import {CategoriesSelectors} from '../../store/categoreisSlice'
import { useSelector, useDispatch } from 'react-redux';
//import { Card } from '../Card';
import { ButtonBack } from '../ButtonBack';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { fetchSelectedCategory } from '../../store/selectedCategorySlice';

export function CategoryPage () {
  const category = useSelector(SelectedCategorySelectors.getSelectedCategory)
  //  const category = useSelector(CategoriesSelectors.getCategories)
    console.log ("категория", category)
    const { id } = useParams();
    console.log ("id", id);
       
    const navigate = useNavigate();
    const dispatch = useDispatch();
     
    useEffect (() => {
       dispatch(fetchSelectedCategory(id));
    }, [dispatch, id])
 
     if (!id) {
        return (
            <div>
                <h2 className = {css.text}> Category is not found, <ButtonBack onClick = {() => navigate(-1)} className = {css.button} title = "come back"/>  </h2>   
            </div>
        )
    }
    console.log("категория после условия", category)
        return (
            <div className = {css.categoryPage}>
        <section>
            <Header/>
            {category.map((cat) => (
                <div>
                <div className = {css.title}> <h1> {cat.label} </h1></div>
           
                </div>
            ))}
            <Footer  text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>     
        </section>
        </div>         
        )
}