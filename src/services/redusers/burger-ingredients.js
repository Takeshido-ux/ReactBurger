import { GET_INGREDIENTS, GET_INGREDIENTS_FAILED,  GET_INGREDIENTS_SUCCES, IS_DRAG, INCREMENT, DECREMENT} from "../actions/burger-ingredients";

const initialState = {
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: [],
    isDrag: false
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      };
    }
    case GET_INGREDIENTS_SUCCES: {
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
                ingredientsRequest: false 
            };
    }
    case IS_DRAG:
      return{
        ...state,
        isDrag: !state.isDrag
      }
    case INCREMENT:
      state.ingredients.forEach(item => {
        if(action.payload._id === item._id){
          if(action.payload.type === 'bun'){
            state.ingredients.forEach(item => item.type === 'bun' ? item.count = 0 : item.count)
            item.count = 1
          }
          else item.count++
        }
      })
      return {
        ...state
      }
    case DECREMENT:
      state.ingredients.forEach(item => {
        if(action.payload === item._id){
          item.count--
        }
      })
      return {
        ...state
      }
        default: {
            return state
        }
    }
} 