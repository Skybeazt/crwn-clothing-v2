import { Routes, Route } from "react-router-dom";
import Category from "./../category/category.component.jsx";
import CategoriesPreview from "./../categories-preview/categories-preview.component.jsx";

import "./shop.styles.scss";

const Shop = function () {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
