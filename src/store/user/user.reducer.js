import { USER_ACTIONS_TYPES } from "./user.types.js";

const INITIAL_USER_STATE = {
  currentUser: {},
};

export const userReducer = function (
  state = INITIAL_USER_STATE,
  action = () => {}
) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
