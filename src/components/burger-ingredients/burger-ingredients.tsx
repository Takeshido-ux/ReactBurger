import {
  Tab,
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useRef } from "react";
import style from "./burger-ingredients.module.css";
import { useSelector, useDispatch } from "../../services/redusers/index";
import {
  DRAG_START,
  DRAG_END,
} from "../../services/actions/burger-ingredients";
import { ADD_CONSTRUCTOR_INGREDIENT } from "../../services/actions/burger-constructor";
import { TOGGLE } from "../../services/actions/modal";
import { GET_ID } from "../../services/actions/ingridient-details";
import { useNavigate } from "react-router-dom";
import { TIngredients } from "../../utils/types";

const BurgerIngredients = () => {
  const { ingredients } = useSelector((store) => ({
    ingredients: store.ingredients.ingredients,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIngredientClick = (e: React.SyntheticEvent) => {
    let id = e.currentTarget.id;
    dispatch({ type: TOGGLE });
    dispatch({ type: GET_ID, payload: id });
    navigate(`/ingredients/${id}`, {
      state: { background: "/" },
    });
  };

  const handleIngredientDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleIngredientDragStart = (e: React.DragEvent) => {
    const ingredient: TIngredients | undefined = ingredients.find(
      (item: TIngredients) => item._id === e.currentTarget.id
    );
    dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, payload: ingredient });
    dispatch({ type: DRAG_START });
  };

  const handleIngredientDragEnd = () => {
    dispatch({ type: DRAG_END });
  };

  const scrollBar = useRef();
  const [current, setCurrent] = React.useState("one");

  return (
    <div style={{ width: "50%" }}>
      <p className="text text_type_main-large mb-8 mt-10">Соберите бургер</p>
      <nav className={style.flex}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={style.scrollBar}>
        <div>
          <p className="text text_type_main-medium mb-8 mt-8">Булки</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {ingredients.map((item: TIngredients) => {
              return item.type === "bun" ? (
                <div
                  id={item._id}
                  draggable={true}
                  onDragEnd={handleIngredientDragEnd}
                  onDragStart={handleIngredientDragStart}
                  onDrag={handleIngredientDrag}
                  onClick={handleIngredientClick}
                  key={item._id}
                  className={style.ingredient}
                >
                  <div className={style.counter}>
                    <Counter count={item.count} size="default" />
                  </div>
                  <img className={style.marginImg} src={item.image} alt="" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px 0 15px 0",
                    }}
                  >
                    <p className="text text_type_digits-default mr-2">
                      {item.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    style={{ textAlign: "center" }}
                    className={`text text_type_main-default ${style.marginAuto}`}
                  >
                    {item.name}
                  </p>
                </div>
              ) : null;
            })}
          </div>
        </div>
        <div>
          <p className="text text_type_main-medium mb-8 mt-8">Соусы</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {ingredients.map((item: TIngredients) => {
              return item.type === "sauce" ? (
                <div
                  id={item._id}
                  draggable={true}
                  onDragEnd={handleIngredientDragEnd}
                  onDragStart={handleIngredientDragStart}
                  onDrag={handleIngredientDrag}
                  onClick={handleIngredientClick}
                  key={item._id}
                  className={style.ingredient}
                >
                  <div className={style.counter}>
                    <Counter count={item.count} size="default" />
                  </div>
                  <img className={style.marginImg} src={item.image} alt="" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px 0 15px 0",
                    }}
                  >
                    <p className="text text_type_digits-default mr-2">
                      {item.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    style={{ textAlign: "center" }}
                    className={`text text_type_main-default ${style.marginAuto}`}
                  >
                    {item.name}
                  </p>
                </div>
              ) : null;
            })}
          </div>
        </div>
        <div>
          <p className="text text_type_main-medium mb-8 mt-8">Начинки</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {ingredients.map((item: TIngredients) => {
              return item.type === "main" ? (
                <div
                  id={item._id}
                  draggable={true}
                  onDragEnd={handleIngredientDragEnd}
                  onDragStart={handleIngredientDragStart}
                  onDrag={handleIngredientDrag}
                  onClick={handleIngredientClick}
                  key={item._id}
                  className={style.ingredient}
                >
                  <div className={style.counter}>
                    <Counter count={item.count} size="default" />
                  </div>
                  <img className={style.marginImg} src={item.image} alt="" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px 0 15px 0",
                    }}
                  >
                    <p className="text text_type_digits-default mr-2">
                      {item.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    style={{ textAlign: "center" }}
                    className={`text text_type_main-default ${style.marginAuto}`}
                  >
                    {item.name}
                  </p>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerIngredients;
