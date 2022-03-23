import React from "react";
import ReactDOM from "react-dom";
import style from "./modal-overlay.module.css";
import { useSelector, useDispatch } from "../../services/redusers/index";
import { TOGGLE } from "../../services/actions/modal";

const modalRoot = document.getElementById("modals")!;
export default function ModalOverlay() {
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch({ type: TOGGLE });
  };
  const isActive = useSelector((store) => store.modalToggle.isActive);
  return ReactDOM.createPortal(
    <>
      {isActive && (
        <div onClick={handleToggleModal} className={style.modalOverlay}></div>
      )}
    </>,
    modalRoot
  );
}
