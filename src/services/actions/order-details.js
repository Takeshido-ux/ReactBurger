export const GET_ORDER_INFO = 'GET_ORDER_INFO';
export const GET_ORDER_INFO_FAILED = 'GET_ORDER_INFO_FAILED';
export const GET_ORDER_INFO_SUCCES = 'GET_ORDER_INFO_SUCCESS';
const URL = 'https://norma.nomoreparties.space/api/orders';

export const getOrderInfo = (order) => {
    return function(dispatch) {
        dispatch({
        type: GET_ORDER_INFO
        })
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "ingredients": order
            })
        })
        .then( res  => {
            if (res && res.success) {
                dispatch({
                type: GET_ORDER_INFO_SUCCES,
                })
            } else {
                dispatch({
                type: GET_ORDER_INFO_FAILED
                })
            }
            return res.json();
        })
        .then(data => {
            dispatch({
                type: GET_ORDER_INFO_SUCCES,
                name: data.name,
                number: data.order.number
            })
        })
        .catch( err => {
                dispatch({
                    type: GET_ORDER_INFO_FAILED
                })
            })
    }
} 