import React from "react";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

export default function Constructor() {
  return (
    <div className="burger_container">
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}
