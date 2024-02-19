import DirectoryItem from "./../directory-item/directory-item.component.jsx";

import "./directory.styles.scss";

const Directory = function ({ categories, className }) {
  return (
    <div className={className}>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
