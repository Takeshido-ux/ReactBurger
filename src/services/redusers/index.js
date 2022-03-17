import { combineReducers, createStore, applyMiddleware } from "redux";
import { modalToggleReducer } from "./modal";
import { ingredientIdSetReducer } from "./ingredient-details";
import { ingredientsReducer } from "./burger-ingredients";
import { constructorIngredientsReducer } from "./burger-constructor";
import { orderInfoReducer } from "./order-details";
import thunk from "redux-thunk";
import { getUserReducer } from "./user";
import { resetPasswordReducer } from "./reset-password";

const rootReducer = combineReducers({
  modalToggle: modalToggleReducer,
  ingredientIdSet: ingredientIdSetReducer,
  ingredients: ingredientsReducer,
  orderInfo: orderInfoReducer,
  constructorIngredients: constructorIngredientsReducer,
  user: getUserReducer,
  resetPassword: resetPasswordReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
