import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector.js";

import CategoryPreview from "./../../components/category-preview/category-preview.component.jsx";
import Spinner from "./../../components/spinner/spinner.component.jsx";

const CategoriesPreview = function () {
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
