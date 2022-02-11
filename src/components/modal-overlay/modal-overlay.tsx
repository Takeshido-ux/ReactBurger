import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

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

ModalOverlay.propTypes = {
  handleToggleModal: PropTypes.func,
  modal: PropTypes.object
}; 