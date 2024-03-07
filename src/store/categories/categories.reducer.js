import { CATEGORIES_ACTIONS_TYPES } from "./categories.types.js";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = function (
  state = CATEGORIES_INITIAL_STATE,
  action = () => {}
) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
