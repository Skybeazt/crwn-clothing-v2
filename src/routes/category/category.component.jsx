import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "./../../store/categories/categories.selector.js";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = function () {
  const { category } = useParams();
  const categoriesMap = useSelector(getCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
