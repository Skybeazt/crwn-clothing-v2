import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "./../../store/categories/categories.selector.js";
import CategoryPreview from "./../../components/category-preview/category-preview.component.jsx";

const CategoriesPreview = function () {
  const categoriesMap = useSelector(getCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
