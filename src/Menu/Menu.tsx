import {Menu} from 'antd'
import React from 'react'
import css from './style.module.css'
//import {PercentageOutlined, HeartOutlined} from '@ant-design/icons'

interface MenuProps {
categories: {id: number; type: string; label: string}[]
}

export class MenuSide extends React.Component<MenuProps> {


    render() {
        return (
            <div>
                <Menu mode = "vertical" className = {css.menu}>
                   <ul>
                   {this.props.categories.map((item)=>{
                       return (
                           
                               <li className = {css.menu__item}><a href = "https://oz.by/">{item.label}</a></li>
                           
                       )
                   })
                   } 
                   </ul>
                </Menu>    
                
            </div>
        )
    }
}
