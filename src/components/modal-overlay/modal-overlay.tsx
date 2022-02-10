import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal-overlay.module.css';

const modalRoot = document.getElementById("modals");
//@ts-ignore
export default function ModalOverlay(props) {
  //@ts-ignore
  return (ReactDOM.createPortal(
    <>
      {
      props.modal.isToggle &&
      (<div onClick={props.handleToggleModal} className={style.modalOverlay}>
        
      </div>)
      }
    </>,
    //@ts-ignore
    modalRoot
  ));
}
