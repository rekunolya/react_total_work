import React from 'react'
import css from './style.module.css'
import {Card} from 'antd'
import { Selectors } from "../store"
import { useSelector } from 'react-redux';
import { useParams} from 'react-router';
import {Link} from 'react-router-dom';

interface CardProps {
id: number; 
category_type: string;   
label: string;
price: number; 
img: string;
}

export const CardSite: React.FC<CardProps> = ({label, price, img}) => {
        const {Meta} = Card;
        const products =  useSelector(Selectors.getGoodCategories);
        const { id,type } = useParams();
        const cat =  products.find(el => el.category.type === type);
       const product = cat?.items.find (el => el.id === Number(id))

        return (
            

            <Link to = {`/${type}/${product?.id}`}>
            <Card 
            style = {{width: 233}} 
            cover = {<img src = {img} alt = "" className = {css.image}/>}
            className = {css.card}>
                <Meta title ={label} description = {price}/>
            </Card>
            </Link>
        )
    }
