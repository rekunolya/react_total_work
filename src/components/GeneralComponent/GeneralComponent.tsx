import React from "react";
import {Menu} from '../Menu';
import {BoardCard} from '../BoardCard';
import {Footer} from '../Footer';
import logo from '../../img/unnamed.jpg';
import { useSelector } from 'react-redux';
import { Selectors } from "../../store";
import { Header } from "../Header";
//import { CategoriesSelectors } from "../../store/categoreisSlice"


export const GeneralComponent: React.FC = () => {
  
       //const categories = useSelector(CategoriesSelectors.getCategories);
       const goodCategories = useSelector(Selectors.getGoodCategories) ;
          
          return (
            <div>
                <Header/>
                <section className = "first_section">
                    <Menu/>
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


