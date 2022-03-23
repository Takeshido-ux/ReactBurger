import React from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useSelector } from "../../services/redusers/index";

const modalRoot = document.getElementById("modals")!;

export default function Modal() {
  const isActive = useSelector((store) => store.modalToggle.isActive);
  const id = useSelector((store) => store.ingredientIdSet.ingredientId);
  return ReactDOM.createPortal(
    <>
      {isActive && (
        <div className={style.modal}>
          {id === "orderDetails" ? <OrderDetails /> : <IngredientDetails />}
        </div>
      )}
      <ModalOverlay />
    </>,
    modalRoot
  );
}
