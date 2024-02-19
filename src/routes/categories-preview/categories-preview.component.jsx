import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoryPreview from "./../../components/category-preview/category-preview.component.jsx";

const CategoriesPreview = function () {
  const { categoriesMap } = useContext(CategoriesContext);
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
