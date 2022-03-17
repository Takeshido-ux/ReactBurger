import React, { useMemo } from "react";
import style from "./ingredient.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Ingredient = () => {
  //@ts-ignore
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  //@ts-ignore
  const { id } = useParams();
  //@ts-ignore
  let item = useMemo(() => {
    if (ingredients !== []) {
      //@ts-ignore
      return ingredients.find((item) =>
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
          {
            //@ts-ignore
            ingredients.map((item) => (item._id === id ? item.name : null))
          }
        </p>
        <div className={style.ingredients__item}>
          <p className={style.p}>
            Калории,ккал
            <br />
            {
              //@ts-ignore
              ingredients.map((item) =>
                item._id === id ? item.calories : null
              )
            }
          </p>
          <p className={style.p}>
            Белки, г<br />
            {
              //@ts-ignore
              ingredients.map((item) =>
                item._id === id ? item.proteins : null
              )
            }
          </p>
          <p className={style.p}>
            Жиры, г<br />
            {
              //@ts-ignore
              ingredients.map((item) => (item._id === id ? item.fat : null))
            }
          </p>
          <p className={style.p}>
            Углеводы, г<br />
            {
              //@ts-ignore
              ingredients.map((item) =>
                item._id === id ? item.carbohydrates : null
              )
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
