import {
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  TResetPasswordAction,
} from "../actions/reset-password";
import { TResetPassword } from "../../utils/types";

const initialState: TResetPassword = {
  answer: {
    message: "",
    success: false,
  },
  pathName: "",
};

export const resetPasswordReducer = (
  state = initialState,
  action: TResetPasswordAction
) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        answer: action.payload,
        pathName: action.pathName,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        answer: action.payload,
        pathName: action.pathName,
      };
    default:
      return state;
  }
};
