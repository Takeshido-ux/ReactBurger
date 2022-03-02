import { TOGGLE, GET_ID } from '../actions/modal';

const modalState = {
    isActive: false
}

export const modalToggleReducer = (state = modalState, action) => {
    switch(action.type){
        case TOGGLE:
            return {
                ...state,
                isActive: !state.isActive
            }
        default: return state
    }
}

const ingredientIdState = {
    ingredientId: ''
}

export const ingredientIdSetReducer = (state = ingredientIdState, action) => {
    switch(action.type){
        case GET_ID:
            return {
                ...state,
                ingredientId: action.payload
            }
        default: return state
    }
}