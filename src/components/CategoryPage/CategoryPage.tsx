import React, { useEffect } from 'react'
import css from './style.module.css'
import { useParams, useNavigate } from 'react-router';
import { SelectedCategorySelectors } from '../../store/selectedCategorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card';
import { ButtonBack } from '../ButtonBack';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { fetchSelectedCategory } from '../../store/selectedCategorySlice';

export function CategoryPage () {
    const categories = useSelector(SelectedCategorySelectors.getSelectedCategory)
    console.log ("категория", categories)
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
    console.log("категория после условия", categories)
        return (
            <div className = {css.categoryPage}>
        <section>
            <Header/>
            {categories.map((cat) => (
                <div>
                <div className = {css.title}> <h1> {cat.category.label} </h1></div>
                <div className = {css.items}>
                    {cat.items.map((item) =>(
                        <Card key={item.id} img={item.img} category_type = {item.category_type} label = {item.label} price = {item.price}/>
                    ) )}
                </div>
                </div>
            ))}
            <Footer  text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>     
        </section>
        </div>         
        )
}