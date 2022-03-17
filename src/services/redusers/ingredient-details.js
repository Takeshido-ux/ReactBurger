import { GET_ID } from "../actions/ingridient-details";

const ingredientIdState = {
  ingredientId: "",
};

export const ingredientIdSetReducer = (state = ingredientIdState, action) => {
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
