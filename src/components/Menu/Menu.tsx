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
            <div className = {css.menu}>
                <Menu mode = "vertical">
                   {this.props.categories.map((item)=>{
                       return (
                               <Menu.Item className = {css.menu__item}>
                                   <a href = "https://oz.by/">
                                       {item.label}
                                   </a>
                               </Menu.Item>    
                       )
                   })
                   } 
                </Menu>        
            </div>
        )
    }
}
