import React from "react";
import style from "./ingredient-details.module.css";
import { useSelector, useDispatch } from "../../services/redusers";
import { TOGGLE } from "../../services/actions/modal";
import { TIngredients } from "../../utils/types";

export default function IngredientDetails() {
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch({ type: TOGGLE });
  };
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const id = useSelector((store) => store.ingredientIdSet.ingredientId);
  let image_large = ingredients.find((item: TIngredients) =>
    item._id === id ? item.image_large : null
  )?.image_large;
  return (
    <>
      <div className={style.title}>
        <p className="text text_type_main-medium">Детали ингредиента</p>
        <p
          onClick={handleToggleModal}
          className={`text text_type_main-medium ${style.cursor}`}
        >
          x
        </p>
      </div>
      <div>
        <img className={style.img} src={image_large} alt="" />
        <p
          style={{ textAlign: "center" }}
          className={`text text_type_main-default`}
        >
          {ingredients.map((item: TIngredients) =>
            item._id === id ? item.name : null
          )}
        </p>
        <div className={style.ingredients__item}>
          <p className={style.p}>
            Калории,ккал
            <br />
            {ingredients.map((item: TIngredients) =>
              item._id === id ? item.calories : null
            )}
          </p>
          <p className={style.p}>
            Белки, г<br />
            {ingredients.map((item: TIngredients) =>
              item._id === id ? item.proteins : null
            )}
          </p>
          <p className={style.p}>
            Жиры, г<br />
            {ingredients.map((item: TIngredients) =>
              item._id === id ? item.fat : null
            )}
          </p>
          <p className={style.p}>
            Углеводы, г<br />
            {ingredients.map((item: TIngredients) =>
              item._id === id ? item.carbohydrates : null
            )}
          </p>
        </div>
      </div>
    </>
  );
}
