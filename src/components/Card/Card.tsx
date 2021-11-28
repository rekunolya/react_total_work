import React from 'react'
import css from './style.module.css'
import {Card as CardAntd} from 'antd'
import {Link} from 'react-router-dom';

interface CardProps {
id: number; 
category_type: string;   
label: string;
price: number; 
img: string;
}

export const Card: React.FC<CardProps> = ({label, price, img, id, category_type}) => {
      
        return (
            <Link to = {`/${category_type}/${id}`}>
            <CardAntd 
            style = {{width: 233}} 
            cover = {<img src = {img} alt = "" className = {css.image}/>}
            className = {css.card}>
                <CardAntd.Meta title ={label} description = {price} className = {css.title} />
            </CardAntd>
            </Link>
        )
    }
