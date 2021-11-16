import React from 'react';
import './App.css';
import { MenuSide } from './Menu';
import logo from '../src/img/unnamed.jpg'

class App extends React.Component {


render() {
  const categories = [
    {id: 1, type: "entertainment", label: "Развлечения, творчество"},
    {id: 2, type: "mum&child", label: "Детям и мамам"},
    {id: 3, type: "souvenirs", label: "Сувениры"},
    {id: 4, type: "books", label: "Книги"},
    {id: 5, type: "cosmetics", label: "Косметика, парфюмерия"},
    {id: 6, type: "goods", label: "Продукты, деликатесы"},
    {id: 7, type: "house", label: "Дом, сад, зоотовары"},
    {id: 8, type: "technics", label: "Техника, электроника"},
    {id: 9, type: "study", label: "Канцтовары, учеба"},
    {id: 10, type: "tourism", label: "Туризм, отдых, спорт"},
    {id: 11, type: "health", label: "Здоровье, медтехника"},
];
  return (
    <div className="App">
      <header >
     
      </header>
      <section className = "first_section">
      <MenuSide categories = {categories}/>
      <div className = "image__section">
        <img src = {logo} alt = "painting"  width = "1160px"/>
      </div>
      
      </section>
    </div>
  );
}

}

export default App;
