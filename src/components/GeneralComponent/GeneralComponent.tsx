import React from "react";
import {Menu} from '../Menu';
import {Footer} from '../Footer';
import logo from '../../img/unnamed.jpg';
import { Header } from "../Header";
import { PopularCategories } from "../PopularCategories";

export const GeneralComponent: React.FC = () => {

          return (
            <div>
                <Header/>
                <section className = "first_section">
                    <Menu/>
                    <div className = "image__section">
                        <img src = {logo} alt = "painting"  width = "1160px"/>
                    </div>
                </section>
                <PopularCategories/>
                <Footer  text = "OOO «Праздник к нам приходит». Свидетельство о регистрации выдано каким-то странным органом от 32.08.2222 с регистрационным номером N968PC69."
/>
            </div>
          )

}


