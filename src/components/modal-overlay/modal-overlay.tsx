import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal-overlay.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE } from '../../services/actions/modal';

const modalRoot = document.getElementById("modals");
//@ts-ignore
export default function ModalOverlay(props) {
  const dispatch = useDispatch();
    const handleToggleModal = () => { dispatch({type: TOGGLE}) }
  //@ts-ignore
  const isActive = useSelector(store => store.modalToggle.isActive)
  return (ReactDOM.createPortal(
    <>
      {isActive && (<div onClick={handleToggleModal} className={style.modalOverlay}></div>)}
    </>,
    //@ts-ignore
    modalRoot
  ));
}
