import { createSelector } from "reselect";

const selectCategoriesReducer = function (state) {
  return state.categories;
};

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesReducer) => categoriesReducer.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
