import React, { useEffect } from 'react';
import css from './style.module.css';
import{fetchProduct, ProductSelectors} from '../../store/ProductSlice'
//import { PopularCategoriesSelectors  } from "../../store/popularCategoriesSlice"
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { ButtonBack } from '../ButtonBack';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Button } from 'antd';
//import { SelectedCategorySelectors } from '../../store/selectedCategorySlice';


export const ProductPage =  () => {
    //const category = useSelector(SelectedCategorySelectors.getSelectedCategory);
    const product =  useSelector(ProductSelectors.getProduct);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('product id', id)
    const dispatch = useDispatch();
    //const cat =  products.find((el:any) => el.category.type === type);
    //const product = cat?.items.find((el:any) => el.id === Number(id) );
    //const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id])

    const actionCart = () => {

    }

    if (!id || !product) {
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
        <Button className = {css.addToCart} onClick = {actionCart}> Добавить в корзину </Button>
        </div>
 
        <Footer text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>

      

    </div>

    )

    
 

    


}