import React , {useEffect} from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import ModalOverlay from './components/modal-overlay/modal-overlay';
import Modal from './components/modal/modal';
import { DataContext } from './utils/data-context';


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
      <AppHeader />
      <DataContext.Provider value={state}>
      <div>
        <Modal
          modal={modal}
          handleToggleModal={handleToggleModal}
        />
        <ModalOverlay
          modal={modal}
          handleToggleModal={handleToggleModal}
        />
      </div>
      <div style={{display: 'flex', width: '70%', margin: '0 auto'}}>
        <BurgerIngredients 
        handleToggleModal={handleToggleModal} 
        />
        <BurgerConstructor 
        handleToggleModal={handleToggleModal} 
        />
      </div>
      </DataContext.Provider>
    </div>
  );
}


export default App;
