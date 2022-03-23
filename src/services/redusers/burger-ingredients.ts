import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  INCREMENT,
  DECREMENT,
  DRAG_START,
  DRAG_END,
  GET_INGREDIENTS_SUCCESS,
  TGetIngredientAction,
} from "../actions/burger-ingredients";
import { TIngredients, TMainIngredients } from "../../utils/types";

const initialState: TMainIngredients = {
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredients: [],
  dragStart: false,
  dragEnd: false,
};

export const ingredientsReducer = (
  state = initialState,
  action: TGetIngredientAction
) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    case DRAG_START:
      return {
        ...state,
        dragStart: true,
        dragEnd: false,
      };
    case DRAG_END: {
      return {
        ...state,
        dragStart: false,
        dragEnd: true,
      };
    }
    case INCREMENT:
      state.ingredients.forEach((item: TIngredients) => {
        if (action.payload._id === item._id) {
          if (action.payload.type === "bun") {
            state.ingredients.forEach((item: TIngredients) =>
              item.type === "bun" ? (item.count = 0) : item.count
            );
            item.count = 1;
          } else item.count++;
        }
      });
      return {
        ...state,
      };
    case DECREMENT:
      state.ingredients.forEach((item: TIngredients) => {
        if (action.id === item._id) {
          item.count--;
        }
      });
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};
