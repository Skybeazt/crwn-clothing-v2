import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "./../../assets/87 - crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "./../../components/cart-icon/cart-icon.component.jsx";

import { signOutUser } from "./../../utils/firebase/firebase.utils.js";

import { UserContext } from "./../../contexts/user.context.jsx";
import { CartContext } from "./../../contexts/cart.context.jsx";

import "./navigation.styles.scss";

const Navigation = function () {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              {" "}
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen ? <CartDropdown /> : ""}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
