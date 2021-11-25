import {Menu} from 'antd'
import React from 'react'
import css from './style.module.css'
import {Link} from 'react-router-dom'

interface MenuProps {
categories: {id: number; type: string; label: string}[]
}

export class MenuSide extends React.Component<MenuProps> {


    render() {
        return (
            <div className = {css.menu}>
                <Menu mode = "vertical">
                   {this.props.categories.map((item)=>{
                       return (
                               <Menu.Item className = {css.menu__item}>
                                   <Link to = {`/${item.type}`}>
                                       {item.label}
                                   </Link>
                               </Menu.Item>    
                       )
                   })
                   } 
                </Menu>        
            </div>
        )
    }
}
