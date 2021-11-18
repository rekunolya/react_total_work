import React from 'react'
import css from './style.module.css'
import {Card} from 'antd'

interface CardProps {
id: number; 
category_type: string;   
label: string;
price: number; 
img: string;
}

export class CardSite extends React.Component<CardProps> {
    render() {
        const {Meta} = Card;
        return (
            <Card 
            style = {{width: 233}} 
            cover = {<img src = {this.props.img} alt = "" className = {css.image}/>}
            className = {css.card}>
                <Meta title ={this.props.label} description = {this.props.price}/>
            </Card>
        )
    }
}