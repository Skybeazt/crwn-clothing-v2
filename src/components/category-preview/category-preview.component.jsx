import { Link } from "react-router-dom";

import ProductCard from "./../product-card/product-card.component.jsx";
import "./category-preview.styles.scss";

const CategoryPreview = function ({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2 className="">
        <span className="title">
          <Link to={`${title}`}>{title.toUpperCase()}</Link>
        </span>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;