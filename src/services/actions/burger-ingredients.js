export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCES = 'GET_INGREDIENTS_SUCCESS';
export const IS_DRAG = 'IS_DRAG';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
const URL = 'https://norma.nomoreparties.space/api/ingredients';

export const getIngredients = () => {
    return function(dispatch) {
        dispatch({
        type: GET_INGREDIENTS
        })
        fetch(URL)
        .then( res  => {
            if (res && res.success) {
                dispatch({
                type: GET_INGREDIENTS_SUCCES,
                })
            } else {
                dispatch({
                type: GET_INGREDIENTS_FAILED
                })
            }
            return res.json();
        })
        .then(data => {
            data.data.map(item => {
                return(
                    item.isAdded = false, 
                    item.count = 0    
                )
            });
            dispatch({
                type: GET_INGREDIENTS_SUCCES,
                ingredients: data.data,
            })
        })
        .catch( err => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
            })
    }
} 