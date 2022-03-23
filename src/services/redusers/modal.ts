import { TModalAction, TOGGLE } from "../actions/modal";

const modalState = {
  isActive: false,
};

export const modalToggleReducer = (
  state = modalState,
  action: TModalAction
) => {
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
