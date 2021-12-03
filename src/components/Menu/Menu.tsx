import {Menu as MenuAntd} from 'antd';
import React from 'react';
import css from './style.module.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {CategoriesAction, LOAD_STATUSES, CategoriesSelectors} from '../../store/categoreisSlice'



interface MenuProps {
categories: {id: number; type: string; label: string}[]
}

export const MenuBase: React.FC <MenuProps> = ({categories}) => {

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

    const mapStateToProps = (state: any) => {
        return {
            menu: CategoriesSelectors.getCategories(state),
            isLoading: CategoriesSelectors.getCategoriesLoadStatus(state) === LOAD_STATUSES.LOADING,
            isError: CategoriesSelectors.getCategoriesLoadStatus(state) === LOAD_STATUSES.ERROR
        };
    };

export const Menu = connect(mapStateToProps)(MenuBase)

