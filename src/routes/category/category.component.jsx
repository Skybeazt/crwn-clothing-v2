import { useContext, useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "./../../store/categories/categories.selector.js";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = function () {
  const { category } = useParams();
  const categoriesMap = useSelector(getCategoriesMap);
  // const { categoriesMap } = useContext(CategoriesContext);
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

  // return (
  //   <div className="category-preview-container">
  //     <h2>
  //       <span className="title">{title.toUpperCase()}</span>
  //     </h2>
  //     <div className="preview">
  //       {products.map((product) => (
  //         <ProductCard key={product.id} product={product} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Category;
