import createAction from "./../../utils/reducer/reducer.utils.js";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types.js";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

const fetchCategoriesStart = function () {
  return createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START);
};

const fetchCategoriesSuccess = function (categoriesArray) {
  return createAction(
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

const fetchCategoriesFailed = function (error) {
  return createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED, error);
};

export const fetchCategoriesAsync = function () {
  return async function (dispatch) {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
