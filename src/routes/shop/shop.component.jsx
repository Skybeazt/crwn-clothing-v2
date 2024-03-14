import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./../category/category.component.jsx";
import CategoriesPreview from "./../categories-preview/categories-preview.component.jsx";

import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/categories.actions.js";

const Shop = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
