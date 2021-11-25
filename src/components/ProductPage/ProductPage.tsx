import React from 'react';
import css from './style.module.css';
import { Selectors } from "../store"
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router'
import { ButtonBack } from '../ButtonBack';



export function ProductPage (){

    const products =  useSelector(Selectors.getGoodCategories);
    const navigate = useNavigate();
    const { id, type } = useParams();
    const cat =  products.find(el => el.category.type === type);
    const product = cat?.items.find(el => el.id === Number(id) );

    if (!product) {
        return (
            <div>
                <h2 className = {css.text}> Продукт не найден, <ButtonBack onClick = {() => navigate(-1)} className = {css.button} title = "вернитесь назад"/>  </h2>
                
            </div>
        )

    } 
    return (
        <div>
        <div> {product.img}  </div>
        <div>
            <div> {product.label} </div>
            <div> {product.price} </div>
            <div> Description </div>
        </div>

    </div>

    )

    
 

    


}