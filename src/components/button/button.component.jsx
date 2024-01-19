/*
default button
inverted button
google sign-in button

*/

import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = function ({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
