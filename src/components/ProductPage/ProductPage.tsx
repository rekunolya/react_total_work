import React, { useEffect } from 'react';
import css from './style.module.css';
import{fetchProduct, ProductSelectors} from '../../store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { ButtonBack } from '../ButtonBack';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Button } from 'antd';
import {CartAction,  BUTTON_TEXT} from '../../store/CartSlice'
import {CartSelectors} from '../../store/CartSlice'


export const ProductPage =  () => {
    const product =  useSelector(ProductSelectors.getProduct);
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id])

const carts = useSelector(CartSelectors.getCart);
let buttonStatus = BUTTON_TEXT.ADD_TO_CART;
console.log("cart", carts);
console.log("product", product);

    if (!id || !product) {
        console.log("gdfg")
        return (
            <div>
                <h2 className = {css.text}> Продукт не найден, <ButtonBack onClick = {() => navigate(-1)} className = {css.button} title = "вернитесь назад"/>  </h2>        
            </div>
        )
    } 
 
    if (carts != null && carts.find((item: any) => item.id === product[0].id)) {
        buttonStatus = BUTTON_TEXT.DELETE_FROM_CART; 
}

    return (
        <div className = {css.productPage}>
        <Header/>
        <div className = {css.card}>
        <img src = {product[0].img} alt = ""  className = {css.img}/> 
        <div  className = {css.label}> {product[0].label} </div>
        <div className = {css.price}> {product[0].price} руб. </div>
        <div className = {css.discription}> {product[0].description} </div>
        <Button 
        className = {css.addToCart} 
        onClick = {() => {
            dispatch(CartAction.statusCart(product[0], buttonStatus))
        }}> 
        {buttonStatus} 
        </Button>
        </div>
        <Footer text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>
    </div>

    )

    
 

    


}