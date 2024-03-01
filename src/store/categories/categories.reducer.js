import { CATEGORIES_ACTIONS_TYPES } from "./categories.types.js";

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = function (
  state = CATEGORIES_INITIAL_STATE,
  action = () => {}
) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_ITEMS:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
