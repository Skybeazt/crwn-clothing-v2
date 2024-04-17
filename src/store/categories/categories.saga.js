import { takeLatest, call, all, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "./../../utils/firebase/firebase.utils.js";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action.js";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types.js";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* fetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(fetchCategories)]);
}
