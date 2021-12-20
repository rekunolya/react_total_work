import React from 'react';
import './App.css';
import { GeneralComponent } from './components/GeneralComponent';
import {Route, Routes} from 'react-router-dom';
//import {Switch, Route} from 'react-router-dom';
import {NotFoundPage} from './components/NotFoundPage';
import { CategoryPage } from '../src/components/CategoryPage';
import { ProductPage } from '../src/components/ProductPage';
//import {PopularCategories} from '../src/components/PopularCategories';

class App extends React.Component {


render() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/" element = {<GeneralComponent/>} /> 
      
      <Route path = "/:id" element = {<CategoryPage/>}/>
      <Route path="/:id" element={<ProductPage/>} />
      
       
      <Route path = "*"  element = {<NotFoundPage />}/>
    </Routes>
    </div>
  );
}

}

export default App;
