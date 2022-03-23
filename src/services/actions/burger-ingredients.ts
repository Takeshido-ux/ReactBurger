import { TIngredients } from "../../utils/types";
import { AppThunk, AppDispatch } from "../redusers";

export const GET_INGREDIENTS: "GET_INGREDIENTS" = "GET_INGREDIENTS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const DRAG_START: "DRAG_START" = "DRAG_START";
export const DRAG_END: "DRAG_END" = "DRAG_END";
export const INCREMENT: "INCREMENT" = "INCREMENT";
export const DECREMENT: "DECREMENT" = "DECREMENT";
const URL = "https://norma.nomoreparties.space/api/ingredients";

export type TGetIngredientAction = {
  type: string;
  payload: TIngredients;
  ingredients: Array<TIngredients>;
  id: string;
};

export const getIngredients: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    const res = await fetch(URL);
    const { data, success } = await res.json();
    if (success) {
      data.forEach((item: TIngredients) => {
        return (item.isAdded = false), (item.count = 0);
      });
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: data,
      });
    }
  };
};
