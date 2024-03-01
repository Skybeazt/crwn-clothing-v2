import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "./../../utils/firebase/firebase.utils.js";
import { setCategoriesMap } from "./../../store/categories/categories.action.js";

import { Routes, Route } from "react-router-dom";
import Category from "./../category/category.component.jsx";
import CategoriesPreview from "./../categories-preview/categories-preview.component.jsx";

const Shop = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
