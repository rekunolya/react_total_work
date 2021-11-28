import React from "react";
import css from "./style.module.css";
import { Button, Input } from "antd"; 

interface HeaderProps {

}


export class Header extends React.Component {

        render() {
            //const onSearch = value => console.log(value);
        return (
            <div className = {css.header}>
                <div>
                    <img src = "https://oz.by/img/module-header/logo.v1637746199.png" alt = ""/>
                </div>
                <div className = {css.info}>
                    <ul className = {css.list}>
                        <li> <b> 695-25-25 </b> МТС, А1, Life:) </li>
                        <li> <a href = "/">Закажите звонок</a> или <a href = "/"> Напишите нам </a></li>
                    </ul>
                    
                    <Input.Search placeholder="Введите название товара" allowClear />
                  

                </div>
                <div>
                    <ul className = {css.list}>
                        <a ><li> Помощь </li></a>
                        <a><li> Доставка </li></a>
                        <a><li> Оплата </li></a>
                    </ul>
                    <div className = {css.login}>
                     
                        <Button className = {css.entrance}> Войти </Button>
                        <Button className = {css.entrance}> Корзина </Button>
                    </div>

                </div>
            </div>
        )
    }
}