import createAction from "./../../utils/reducer/reducer.utils.js";
import { USER_ACTIONS_TYPES } from "./user.types.js";

export const setCurrentUser = function (user) {
  return createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
};
