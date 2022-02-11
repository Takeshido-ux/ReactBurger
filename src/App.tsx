import React , {useEffect} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import ModalOverlay from './components/modal-overlay/modal-overlay';
import Modal from './components/modal/modal';

//@ts-ignore
function App() {
  const [state, setState] = React.useState([]);
  const URL = 'https://norma.nomoreparties.space/api/ingredients';
  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setState(data.data);
    }
    getProductData();
  }, [])
  
  const [modal, setModal] = React.useState({
    isToggle: false,
    itemId: ''
  }); 
  //@ts-ignore
  const handleToggleModal = (e) => {
    e.preventDefault();
    setModal({
      isToggle: !modal.isToggle,
      itemId: e.currentTarget.id
    });
  }

  return (
    <div className="App">
      <AppHeader/>
      <div>
        <Modal
          //@ts-ignore
          modal={modal}
          productData={state} 
          handleToggleModal={handleToggleModal}
        />
        <ModalOverlay
          //@ts-ignore 
          modal={modal}
          handleToggleModal={handleToggleModal}
        />
      </div>
      <div style={{display: 'flex', width: '70%', margin: '0 auto'}}>
        <BurgerIngredients 
        handleToggleModal={handleToggleModal} 
        productData={state}
        />
        <BurgerConstructor 
        productData={state}
        handleToggleModal={handleToggleModal} 
        />
      </div>
    </div>
  );
}


export default App;
