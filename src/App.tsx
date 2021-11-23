import React from 'react';
import './App.css';
import { GeneralComponent } from './components/GeneralComponent';
import {Route, Routes} from 'react-router-dom';
//import {Switch, Route} from 'react-router-dom';
import {NotFoundPage} from './components/NotFoundPage';
import { CategoryPage } from '../src/components/CategoryPage';

class App extends React.Component {


render() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/" element = {<GeneralComponent/>} /> 
      <Route path = "/"  element = {<NotFoundPage />}/>
      <Route path = "/:type" element = {<CategoryPage/>}/> 
    </Routes>
    </div>
  );
}

}

export default App;
