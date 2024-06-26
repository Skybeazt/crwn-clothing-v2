import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles.jsx";

const DirectoryItem = function ({ category }) {
  const { title, imageUrl: imageurl, route } = category;
  const navigate = useNavigate();

  function OnNavigateHandler() {
    navigate(route);
  }

  return (
    <DirectoryItemContainer onClick={OnNavigateHandler}>
      <BackgroundImage imageurl={imageurl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
