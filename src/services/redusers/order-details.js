import { GET_ORDER_INFO, GET_ORDER_INFO_FAILED,  GET_ORDER_INFO_SUCCES} from "../actions/order-details";

const initialState = {
    orderInfoRequest: false,
    orderInfoFailed: false,
    orderName: '',
    orderNumber: null
}

export const orderInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_INFO: {
      return {
        ...state,
        orderInfoRequest: true,
        orderInfoFailed: false,
      };
    }
    case GET_ORDER_INFO_SUCCES: {
      return { 
                ...state, 
                orderName: action.name,
                orderNumber: action.number, 
                orderInfoRequest: false 
            };
    }
    case GET_ORDER_INFO_FAILED: {
      return { 
                ...state, 
                orderInfoFailed: true, 
                orderInfoRequest: false 
            };
    }
        default: {
            return state
        }
    }
} 