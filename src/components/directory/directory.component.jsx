import CategoryItem from "./../category-item/category-item.component.jsx";

import "./directory.styles.scss";

const Directory = function ({ categories, className }) {
  return (
    <div className={className}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
