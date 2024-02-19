import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import "./category.styles.scss";

const Category = function () {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
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
