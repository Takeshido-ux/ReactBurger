import {
  Tab,
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useRef } from "react";
import style from "./burger-ingredients.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IS_DRAG } from "../../services/actions/burger-ingredients";
import { ADD_CONSTRUCTOR_INGREDIENT } from "../../services/actions/burger-constructor";
import { TOGGLE } from "../../services/actions/modal";
import { GET_ID } from "../../services/actions/ingridient-details";
import { useNavigate } from "react-router-dom";

const BurgerIngredients = () => {
  //@ts-ignore
  const { ingredients } = useSelector((store) => ({
    //@ts-ignore
    ingredients: store.ingredients.ingredients,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //@ts-ignore
  const handleIngredientClick = (e) => {
    let id = e.currentTarget.id;
    dispatch({ type: TOGGLE });
    dispatch({ type: GET_ID, payload: id });
    navigate(`/ingredients/${id}`, {
      state: { background: `/` },
    });
  };

  //@ts-ignore
  const handleIngredientDrag = (e) => {
    e.preventDefault();
  };
  //@ts-ignore
  const handleIngredientDragStart = (e) => {
    const ingredient = ingredients.find(
      //@ts-ignore
      (item) => item._id === e.currentTarget.id
    );
    dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, payload: ingredient });
    dispatch({ type: IS_DRAG });
  };
  //@ts-ignore
  const handleIngredientDragEnd = (e) => {
    dispatch({ type: IS_DRAG });
  };

  const scrollBar = useRef();
  const [current, setCurrent] = React.useState("one");
  //@ts-ignore
  const setTab = (e) => {
    if (e === "one") {
      setCurrent("one");
      //@ts-ignore
      scrollBar.current.scrollTop = 0;
    } else if (e === "two") {
      setCurrent("two");
      //@ts-ignore
      scrollBar.current.scrollTop = 350;
    } else if (e === "three") {
      setCurrent("three");
      //@ts-ignore
      scrollBar.current.scrollTop = 900;
    }
  };

  return (
    <div style={{ width: "50%" }}>
      <p className="text text_type_main-large mb-8 mt-10">Соберите бургер</p>
      <nav className={style.flex}>
        <Tab value="one" active={current === "one"} onClick={setTab}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setTab}>
          Начинки
        </Tab>
      </nav>
      <div //@ts-ignore
        ref={scrollBar}
        className={style.scrollBar}
      >
        <div>
          <p className="text text_type_main-medium mb-8 mt-8">Булки</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {
              //@ts-ignore
              ingredients.map((item) => {
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
              })
            }
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
            {
              //@ts-ignore
              ingredients.map((item) => {
                return item.type === "sauce" ? ( //@ts-ignore
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
              })
            }
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
            {
              //@ts-ignore
              ingredients.map((item) => {
                return item.type === "main" ? ( //@ts-ignore
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
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerIngredients;
