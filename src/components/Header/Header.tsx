import React from "react";
import css from "./style.module.css";
import { Badge, Button, Input } from "antd"; 
import 'antd/dist/antd.css';
import '../../App.css';
import '../../index.css'

interface HeaderProps {

}


export class Header extends React.Component {

        render() {
            //const onSearch = value => console.log(value);
        return (
            <div className = {css.header}>
                <div>
                    <a href = "http://oz.by">
                    <img src = "https://oz.by/img/module-header/logo.v1637746199.png" alt = ""/>
                    </a>
                </div>
                <div className = {css.info}>
                    <ul className = {css.list}>
                        <li> <b> 695-25-25 </b> МТС, А1, Life:) </li>
                        <li> <a href = "/">Закажите звонок</a> или <a href = "/"> Напишите нам </a></li>
                    </ul>
                    
                    <Input.Search placeholder="Введите название товара" allowClear className = {css.input}/>
                  

                </div>
                <div>
                    <ul className = {css.list}>
                        <a href = " "><li> Помощь </li></a>
                        <a href = " "><li> Доставка </li></a>
                        <a href = " "><li> Оплата </li></a>
                    </ul>
                    <div className = {css.login}>
                     
                        <Button className = {css.entrance}> Войти </Button>
                        <Badge count = {0} showZero className = {css.cart}>
                            <Button> 
                          Корзина 
                       
                         </Button>
                         </Badge>
                        
                    </div>

                </div>
            </div>
        )
    }
}