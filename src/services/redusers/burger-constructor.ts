import {
  ADD_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENTS,
  CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
  REMOVE_CONSTRUCTOR_INGREDIENT,
  TConstructorIngredientsAction,
} from "../actions/burger-constructor";
import { TConstructorIngredients } from "../../utils/types";

const initialState: TConstructorIngredients = {
  constructorIngredients: [],
  constructorIngredient: {
    type: "",
    _id: "",
    index: 0,
    price: 0,
    name: "",
    image_mobile: "",
    image: "",
    count: 0,
    isAdded: true,
    image_large: "",
    calories: "",
    carbohydrates: "",
    proteins: "",
    fat: "",
  },
};

export const constructorIngredientsReducer = (
  state = initialState,
  action: TConstructorIngredientsAction
): TConstructorIngredients => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        constructorIngredient: action.payload,
      };
    case REMOVE_CONSTRUCTOR_INGREDIENT:
      state.constructorIngredients.splice(action.index, 1);
      return {
        ...state,
        constructorIngredients: state.constructorIngredients,
      };
    case ADD_CONSTRUCTOR_INGREDIENTS:
      const tempObj = { ...action.payload };
      tempObj.isAdded = true;
      tempObj.index = state.constructorIngredients.length;
      if (action.payload.type === "bun") {
        return {
          ...state,
          constructorIngredients: [
            ...state.constructorIngredients.filter(
              (item) => item.type !== "bun"
            ),
            tempObj,
          ],
          constructorIngredient: {
            type: "",
            _id: "",
            index: 0,
            price: 0,
            name: "",
            image_mobile: "",
            image: "",
            count: 0,
            isAdded: true,
            image_large: "",
            calories: "",
            carbohydrates: "",
            proteins: "",
            fat: "",
          },
        };
      } else {
        return {
          ...state,
          constructorIngredients: [...state.constructorIngredients, tempObj],
          constructorIngredient: {
            type: "",
            _id: "",
            index: 0,
            price: 0,
            name: "",
            image_mobile: "",
            image: "",
            count: 0,
            isAdded: true,
            image_large: "",
            calories: "",
            carbohydrates: "",
            proteins: "",
            fat: "",
          },
        };
      }
    case CHANGE_CONSTRUCTOR_INGREDIENT_POSITION:
      state.constructorIngredients.splice(
        action.payload.index,
        0,
        state.constructorIngredients.splice(
          state.constructorIngredient.index,
          1
        )[0]
      );
      return {
        ...state,
        constructorIngredients: state.constructorIngredients,
      };
    default:
      return state;
  }
};
