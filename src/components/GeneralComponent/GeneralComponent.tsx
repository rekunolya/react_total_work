import React from "react";
import {MenuSide} from '../Menu';
import {BoardCard} from '../BoardCard';
import {Footer} from '../Footer';
import logo from '../../img/unnamed.jpg';
import { useSelector } from 'react-redux';
import { Selectors } from "../../store"
import { Header } from "../Header";



export function GeneralComponent () {
  
       const categories = useSelector(Selectors.getCategories);

       const goodCategories = useSelector(Selectors.getGoodCategories) ;
          
          return (
            <div>
                <Header/>
                <section className = "first_section">
                    <MenuSide categories = {categories}/>
                    <div className = "image__section">
                        <img src = {logo} alt = "painting"  width = "1160px"/>
                    </div>
                </section>
                <BoardCard goodCategories = {goodCategories}/>
                <Footer  text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>


            </div>
        )
    }
