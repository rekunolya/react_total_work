import React from 'react';
import css from './style.module.css';
import { Selectors } from "../../store"
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router'
import { ButtonBack } from '../ButtonBack';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Button } from 'antd';


export function ProductPage (){

    const products =  useSelector(Selectors.getGoodCategories);
    const navigate = useNavigate();
    const { id, type } = useParams();
    const cat =  products.find((el:any) => el.category.type === type);
    const product = cat?.items.find((el:any) => el.id === Number(id) );
    

    if (!product) {
        return (
            <div>

                <h2 className = {css.text}> Продукт не найден, <ButtonBack onClick = {() => navigate(-1)} className = {css.button} title = "вернитесь назад"/>  </h2>
                
            </div>
        )

    } 
    
    return (
        <div className = {css.productPage}>
            <Header/>
        <div className = {css.card}>
        
        <img src = {product.img} alt = ""  className = {css.img}/> 
        <div  className = {css.label}> {product.label} </div>
        <div className = {css.price}> {product.price} руб. </div>
        <div className = {css.discription}> Description </div>
        <Button className = {css.addToCart} > Добавить в корзину </Button>
        </div>

        <Footer text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>

      

    </div>

    )

    
 

    


}