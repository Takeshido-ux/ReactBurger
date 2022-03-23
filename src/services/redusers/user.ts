import { GET_USER, TUserAction } from "../actions/user";
import { getCookie } from "../../utils/retriable-fetch";
import { TUser } from "../../utils/types";

const initialState: TUser = {
  user: {
    success: false,
    user: {
      email: "",
      name: "",
    },
    accessToken: "",
    refreshToken: "",
  },
  isAuth: getCookie("accessToken") ? true : false,
};

export const getUserReducer = (state = initialState, action: TUserAction) => {
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
