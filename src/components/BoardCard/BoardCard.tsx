import {CardSite} from '../Card'
import React from 'react'
import css from './style.module.css'

interface BoardCardProps{
goodCategories: {
category: {id: number, type: string, label: string},
items: {id: number, category_type: string, label: string, price: number, img: string}[],
}[]

}

export class BoardCard extends React.Component<BoardCardProps> {
  
    render() {
        return (
            <div>
                {this.props.goodCategories.map((cat) => (
          <section>
            <h3 className = {css.title}>{cat.category.label}</h3>
            <div className = {css.cards}>
            {cat.items.map((item) => (
              <CardSite id={item.id} img={item.img} category_type = {item.category_type} label = {item.label} price = {item.price}/>
            ))}
            </div>
          
          </section>
        ))}
            </div>

        )
    }
}