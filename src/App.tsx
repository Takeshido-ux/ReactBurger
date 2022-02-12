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

  const [burgerConstructor, setBurgerConstructor] = React.useState([]);
  //@ts-ignore
  const createBurger = (e) =>{
    state.forEach(item => {
      //@ts-ignore
      if(item._id === e.currentTarget.id){
        setBurgerConstructor([
          //@ts-ignore
          ...burgerConstructor,
          {
            //@ts-ignore
            isBun: item.type === 'bun',
            //@ts-ignore
            name: item.name,
            //@ts-ignore
            price: item.price,
            //@ts-ignore
            image: item.image_mobile
          }
        ])
      }
    })
  }

  const getOrderInfo = () =>{
      fetch('https://norma.nomoreparties.space/api/orders', { 
      method: 'POST',
      headers: {
        
      },
      body: {
        //@ts-ignore
        "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
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
        createBurger={createBurger} 
        />
        <BurgerConstructor 
        handleToggleModal={handleToggleModal} 
        burgerConstructor={burgerConstructor}
        getOrderInfo={getOrderInfo}
        />
      </div>
      </DataContext.Provider>
    </div>
  );
}


export default App;
