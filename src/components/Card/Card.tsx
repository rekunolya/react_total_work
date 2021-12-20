import React from 'react'
import css from './style.module.css'
import {Card as CardAntd} from 'antd'
import {Link} from 'react-router-dom';

interface CardProps {
    categoryTypeId: string; 
    description: string;
    id: string;
    img: string;
    label: string; 
    price: number;
}

export const Card: React.FC<CardProps> = ({label, price, img, id}) => {
      
        return (
            <Link to = {`/good/${id}`}>
            <CardAntd 
            style = {{width: 200}} 
            cover = {<img src = {img} alt = "" className = {css.image}/>}
            className = {css.card}>
                <CardAntd.Meta title ={label} description = {price} className = {css.title} />
            
            </CardAntd>
            </Link>
        )
    }
