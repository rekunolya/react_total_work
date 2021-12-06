import {Menu as MenuAntd} from 'antd';
import React, { useEffect } from 'react';
import css from './style.module.css';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categoreisSlice'
//import { CategoriesAction } from '../../store/categoreisSlice'



interface MenuProps {
categories: {id: number; type: string; label: string}[]
}

export const Menu: React.FC <MenuProps> = ({categories}) => {

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchCategories);
    }, [dispatch])

        return (
            <div className = {css.menu}>
                <MenuAntd mode = "vertical">
                   {categories.map((item)=>{
                       return (
                               <MenuAntd.Item className = {css.menu__item}>
                                   <Link to = {`/${item.type}`}>
                                       {item.label}
                                   </Link>
                               </MenuAntd.Item>    
                       )
                   })
                   } 
                </MenuAntd>        
            </div>
        )
    };



