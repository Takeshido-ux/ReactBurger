import { GET_ID, ingredientIdSetAction } from "../actions/ingridient-details";

const ingredientIdState = {
  ingredientId: "",
};

export const ingredientIdSetReducer = (
  state = ingredientIdState,
  action: ingredientIdSetAction
) => {
  switch (action.type) {
    case GET_ID:
      return {
        ...state,
        ingredientId: action.payload,
      };
    default:
      return state;
  }
};
