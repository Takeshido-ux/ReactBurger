import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("modals");
//@ts-ignore
export default function Modal(props) {
  //@ts-ignore
  return (ReactDOM.createPortal(
    <>
    
      {
        props.modal.isToggle && 
        //@ts-ignore
      (<div className={style.modal}>
        { props.modal.itemId === 'orderDetails' ?
        (
          <OrderDetails
          handleToggleModal={props.handleToggleModal}
          itemId={props.modal.itemId}
          />
        ) 
        :
        (
        <IngredientDetails 
          handleToggleModal={props.handleToggleModal}
          itemId={props.modal.itemId}
        />
        )
        }
      </div>)
      }
    </>,
    //@ts-ignore
    modalRoot
  ));
}

Modal.propTypes = {
  productData: PropTypes.array,
  handleToggleModal: PropTypes.func,
  modal: PropTypes.object
}; 
