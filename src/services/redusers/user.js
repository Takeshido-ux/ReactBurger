import { GET_USER } from "../actions/user";
import { getCookie } from "../../utils/retriable-fetch";

const initialState = {
  user: {},
  isAuth: getCookie("accessToken") ? true : false,
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};
