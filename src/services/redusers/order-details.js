import { GET_ORDER_INFO } from "../actions/order-details";

const initialState = {
  orderName: "",
  orderNumber: null,
};

export const orderInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_INFO: {
      return {
        ...state,
        orderName: action.name,
        orderNumber: action.number,
      };
    }
    default: {
      return state;
    }
  }
};
