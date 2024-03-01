import { createAction } from "./../../utils/reducer/reducer.utils.js";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

export const setCategoriesMap = function (categoriesMap) {
  return createAction(
    CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_ITEMS,
    categoriesMap
  );
};
