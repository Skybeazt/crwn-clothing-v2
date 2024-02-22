import { Link } from "react-router-dom";

import ProductCard from "./../product-card/product-card.component.jsx";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.jsx";

const CategoryPreview = function ({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title>
          <Link to={`${title}`}>{title.toUpperCase()}</Link>
        </Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
