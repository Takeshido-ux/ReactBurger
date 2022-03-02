import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useSelector } from 'react-redux';

const modalRoot = document.getElementById("modals");
//@ts-ignore
export default function Modal() {
  //@ts-ignore
  const isActive = useSelector(store => store.modalToggle.isActive)
  //@ts-ignore
  const id = useSelector(store => store.ingredientIdSet.ingredientId)
  //@ts-ignore
  return (ReactDOM.createPortal(
    <>
      {isActive && 
        //@ts-ignore
      (<div className={style.modal}>
        { id === 'orderDetails' ? <OrderDetails/> : <IngredientDetails/>}
      </div>)}
      <ModalOverlay/>
    </>,
    //@ts-ignore
    modalRoot
  ));
}

