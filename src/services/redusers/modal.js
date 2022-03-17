import { TOGGLE, GET_ID } from "../actions/modal";

const modalState = {
  isActive: false,
};

export const modalToggleReducer = (state = modalState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isActive: !state.isActive,
      };
    default:
      return state;
  }
};
