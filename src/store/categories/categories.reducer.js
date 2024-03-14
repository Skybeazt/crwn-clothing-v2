import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";
const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = function (
  state = CATEGORIES_INITIAL_STATE,
  action = () => {}
) {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };

    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
