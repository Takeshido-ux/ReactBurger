import React from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import Modal from './components/modal/modal';



function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='burger_container'>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
      <Modal/>
    </div>
  );
}


export default App;
