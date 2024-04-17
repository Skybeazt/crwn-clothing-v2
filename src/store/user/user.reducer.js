import { USER_ACTIONS_TYPES } from "./user.types";
const INITIAL_USER_STATE = { currentUser: null, isLoading: false, error: null };

export const userReducer = function (state = INITIAL_USER_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };

    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
      };

    case USER_ACTIONS_TYPES.SIGN_IN_FAILED:
    case USER_ACTIONS_TYPES.SIGN_OUT_FAILED:
    case USER_ACTIONS_TYPES.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
