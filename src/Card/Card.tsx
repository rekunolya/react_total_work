import React from 'react'
import css from './style.module.css'
import {Card} from 'antd'

interface CardProps {
id: number; 
category_type: string;   
label: string;
price: string; 
img: string;
}

export class CardSite extends React.Component<CardProps> {
    render() {
        const {Meta} = Card;
       // const {id,category_type, label, price, img} = goods
        return (
            <Card 
            style = {{width: 233}} 
            cover = {<img src ="https://source.unsplash.com/random" alt = "" className = {css.image}/>}
            className = {css.card}>
                <Meta title ={this.props.label} description = {this.props.price}/>

            </Card>


        )
    }
}