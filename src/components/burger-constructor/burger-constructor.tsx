import style from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/redusers";
import { TOGGLE } from "../../services/actions/modal";
import { GET_ID } from "../../services/actions/ingridient-details";
import { getOrderInfoThunk } from "../../services/actions/order-details";
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENTS,
  CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
  REMOVE_CONSTRUCTOR_INGREDIENT,
} from "../../services/actions/burger-constructor";
import {
  INCREMENT,
  DECREMENT,
} from "../../services/actions/burger-ingredients";
import React, { useMemo } from "react";
import { TIngredients } from "../../utils/types";

const BurgerConstructor = () => {
  const { dragStart, dragEnd } = useSelector((store) => store.ingredients);
  const { constructorIngredients, constructorIngredient } = useSelector(
    (store) => store.constructorIngredients
  );

  const dispatch = useDispatch();

  const isAllowOrder = useMemo(() => {
    if (
      constructorIngredients.find((item: TIngredients) => item.type === "bun")
    ) {
      return true;
    } else return false;
  }, [constructorIngredients]);

  const handleOrderClick = () => {
    let order: string[] = constructorIngredients.map(
      (item: TIngredients) => item._id
    );
    dispatch({ type: TOGGLE });
    dispatch(getOrderInfoThunk(order));
  };

  const handleClick = (e: React.SyntheticEvent) => {
    let id: string = e.currentTarget.id;
    dispatch({ type: GET_ID, payload: id });
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDropMain = () => {
    if (constructorIngredient.isAdded === false) {
      dispatch({
        type: ADD_CONSTRUCTOR_INGREDIENTS,
        payload: constructorIngredient,
      });
      dispatch({ type: INCREMENT, payload: constructorIngredient });
    }
  };

  const handleDragOverElem = (e: React.DragEvent) => e.preventDefault();
  const handleDropElem = (e: React.DragEvent) => {
    const changeIngredient = constructorIngredients.find(
      (item: TIngredients) => item.index == Number(e.currentTarget.id)
    );
    if (constructorIngredient.isAdded === true) {
      dispatch({
        type: CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
        payload: changeIngredient,
      });
    }
  };

  const handleDragElem = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStartElem = (e: React.DragEvent) => {
    const changeIngredient = constructorIngredients.find(
      (item: TIngredients) => item.index == Number(e.currentTarget.id)
    );
    dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, payload: changeIngredient });
  };

  const handleCloseElement = (index: number, id: string) => {
    dispatch({ type: REMOVE_CONSTRUCTOR_INGREDIENT, index: index });
    dispatch({ type: DECREMENT, id: id });
  };

  const sum = constructorIngredients.reduce(
    (accum: number, item: TIngredients) => {
      if (item.type === "bun") {
        accum += item.price + item.price;
      } else accum += item.price;
      return accum;
    },
    0
  );
  const boxBorder =
    (dragStart && style.borderOn) || (dragEnd && style.borderOff);

  return (
    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
      <div className="pt-30">
        <div
          onDragOver={handleDragOver}
          onDrop={handleDropMain}
          className={"p-2" + " " + boxBorder}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {constructorIngredients.map((item: TIngredients) => {
            if (item.type === "bun") {
              return (
                <div
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className={style.dragTop}
                  key={item._id}
                >
                  <div className={style.dragIcon}></div>
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                  />
                </div>
              );
            }
          })}
          <div className={style.drag}>
            {constructorIngredients.map((item: TIngredients, i: number) => {
              if (item.type !== "bun") {
                return (
                  <div
                    draggable={true}
                    onDrop={handleDropElem}
                    onDrag={handleDragElem}
                    onDragStart={handleDragStartElem}
                    onDragOver={handleDragOverElem}
                    id={i.toString()}
                    key={i}
                    className={style.dragItem}
                  >
                    <div className={style.dragIcon}>
                      <DragIcon type="primary" />
                    </div>
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image_mobile}
                      handleClose={() =>
                        handleCloseElement(Number(i), item._id)
                      }
                    />
                  </div>
                );
              }
            })}
          </div>
          {constructorIngredients.map((item: TIngredients) => {
            if (item.type === "bun") {
              return (
                <div
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className={style.dragBottom}
                  key={item._id}
                >
                  <div className={style.dragIcon}></div>
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                  />
                </div>
              );
            }
          })}
        </div>
        <div
          className="pt-3"
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <div
            className="mr-8"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p className="text text_type_digits-medium mr-2">{sum}</p>
            <CurrencyIcon type="primary" />
          </div>
          <div onClick={handleClick} id="orderDetails">
            <Button
              onClick={handleOrderClick}
              disabled={!isAllowOrder}
              type="primary"
              size="large"
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BurgerConstructor;
