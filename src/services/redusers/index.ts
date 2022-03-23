import { ThunkAction } from "redux-thunk";
import { ActionCreator } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { modalToggleReducer } from "./modal";
import { ingredientIdSetReducer } from "./ingredient-details";
import { ingredientsReducer } from "./burger-ingredients";
import { constructorIngredientsReducer } from "./burger-constructor";
import { orderInfoReducer } from "./order-details";
import thunk from "redux-thunk";
import { getUserReducer } from "./user";
import { resetPasswordReducer } from "./reset-password";
import { TConstructorIngredientsAction } from "../actions/burger-constructor";
import { TGetIngredientAction } from "../actions/burger-ingredients";

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

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TConstructorIngredientsAction | TGetIngredientAction;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, unknown, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
