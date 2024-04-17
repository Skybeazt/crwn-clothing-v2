import { createAction } from "./../../utils/reducer/reducer.utils.js";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

export const fetchCategoriesStart = function () {
  return createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = function (categoriesArry) {
  return createAction(
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArry
  );
};

export const fetchCategoriesFailed = function (error) {
  return createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED, error);
};
