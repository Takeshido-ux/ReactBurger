import React, { useMemo } from "react";
import style from "./ingredient.module.css";
import { useSelector } from "../../services/redusers";
import { useParams } from "react-router-dom";
import { TIngredients } from "../../utils/types";

const Ingredient = () => {
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const { id } = useParams();
  let item = useMemo(() => {
    if (ingredients !== []) {
      return ingredients.find((item: TIngredients) =>
        item._id === id ? item.image_large : null
      );
    }
  }, [ingredients, id]);
  return (
    <div className={style.ingredient}>
      <div>
        <img className={style.img} src={item?.image_large} alt="" />
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
    </div>
  );
};

export default Ingredient;
