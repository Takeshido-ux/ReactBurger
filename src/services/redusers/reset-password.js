import { FORGOT_PASSWORD, RESET_PASSWORD } from "../actions/reset-password";

const initialState = {
  answer: {},
  pathName: "",
};

export const resetPasswordReducer = (state = initialState, action) => {
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
