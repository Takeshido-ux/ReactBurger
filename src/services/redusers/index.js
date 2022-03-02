import { combineReducers, createStore, applyMiddleware } from "redux";
import { modalToggleReducer, ingredientIdSetReducer } from './modal';
import { ingredientsReducer } from './burger-ingredients';
import { constructorIngredientsReducer } from './burger-constructor'
import { orderInfoReducer } from './order-details';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    modalToggle: modalToggleReducer,
    ingredientIdSet: ingredientIdSetReducer,
    ingredients: ingredientsReducer,
    orderInfo: orderInfoReducer,
    constructorIngredients: constructorIngredientsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));