import { GET_ORDER_INFO, TOrderInfoAction } from "../actions/order-details";

const initialState = {
  orderName: "",
  orderNumber: 0,
};

export const orderInfoReducer = (
  state = initialState,
  action: TOrderInfoAction
) => {
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
